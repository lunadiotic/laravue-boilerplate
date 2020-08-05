import { isEmpty } from "lodash";
import localforage from "localforage";
import { setHttpToken } from "../../../helpers";

export const register = ({ dispatch }, { payload, context }) => {
    return axios
        .post("/api/auth/register", payload)
        .then(result => {
            dispatch("setToken", result.data.meta.token)
                .then(res => {
                    dispatch("fetchUser", result.data.data);
                    // console.log(result.data.data);
                })
                .catch(err => {});
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            context.errors = err.response.data.errors;
        });
};

export const login = ({ dispatch }, { payload, context }) => {
    return axios
        .post("/api/auth/login", payload)
        .then(result => {
            // console.log(result.data.data);
            dispatch("setToken", result.data.meta.token)
                .then(res => {
                    dispatch("fetchUser", result.data.data);
                    // console.log(result.data.data);
                })
                .catch(err => {});
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            // console.log(err);
            context.errors = err.response.data.errors;
        });
};

export const fetchUser = ({ commit }, user) => {
    // console.log(user);
    return axios.get("/api/user/me").then(result => {
        commit("setAuthenticated", true);
        commit("setUserData", result.data.data);
    });
};

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch("checkTokenExists").then(token => {
            setHttpToken(token);
        });
    }

    commit("setToken", token);
    setHttpToken(token);
};

export const removeToken = ({ commit }) => {
    commit("setAuthenticated", false);
    commit("setUserData", null);
    commit("setToken", null);
    setHttpToken(null);
};

export const checkTokenExists = () => {
    return localforage.getItem("accesstoken").then(token => {
        if (isEmpty(token)) {
            return Promise.reject("NO_STORAGE_FOUND");
        }
        return Promise.resolve(token);
    });
};

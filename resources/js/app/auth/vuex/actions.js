import { setHttpToken } from "../../../helpers";

export const register = ({ dispatch }, { payload, context }) => {
    return axios
        .post("/api/auth/register", payload)
        .then(result => {
            console.log(result);
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
    commit("setAuthenticated", true);
    commit("setUserData", user);
};

export const setToken = ({ commit }, token) => {
    commit("setToken", token);
    setHttpToken(token);
};

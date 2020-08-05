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
            console.log(result.data);
            dispatch("setToken", result.data.meta.token)
                .then(result => {
                    console.log("fetch user");
                })
                .catch(err => {});
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            console.log(err);
            context.errors = err.response.data.errors;
        });
};

export const setToken = ({ commit, dispatch }, token) => {
    commit("setToken", token);
    setHttpToken(token);
};

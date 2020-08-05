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
            console.log(result);
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            context.errors = err.response.data.errors;
        });
};

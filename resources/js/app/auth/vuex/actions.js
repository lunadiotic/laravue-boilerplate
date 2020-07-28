export const register = ({ dispatch }, { payload }) => {
    return axios
        .post("/api/auth/register", payload)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
};

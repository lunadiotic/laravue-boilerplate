import store from "../vuex";

const beforeEach = (to, from, next) => {
    store
        .dispatch("auth/checkTokenExists")
        .then(() => {
            if (to.meta.guest) {
                next({ name: "home" });
                return;
            }
            next();
        })
        .catch(() => {
            if (to.meta.needsAuth) {
                next({ name: "login" });
                return;
            }

            next();
        });
};

export default beforeEach;

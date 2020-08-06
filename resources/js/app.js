import router from "./router";
import store from "./vuex";
import localforage from "localforage";

require("./bootstrap");
window.Vue = require("vue");

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: "idstack"
});

Vue.component("app", require("./components/App.vue").default);

store
    .dispatch("auth/setToken")
    .then(() => {
        store.dispatch("auth/fetchUser").catch(() => {
            store.dispatch("auth/removeToken");
            router.replace({ name: "login" });
        });
    })
    .catch(() => {
        store.dispatch("auth/removeToken");
    });

const app = new Vue({
    el: "#app",
    router: router,
    store: store
});

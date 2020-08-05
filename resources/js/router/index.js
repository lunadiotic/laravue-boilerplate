import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "../app/index";

// console.log(routes);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: routes
});

export default router;

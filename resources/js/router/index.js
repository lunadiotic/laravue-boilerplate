import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "../app/index";
import beforeEach from "./beforeEach";

// console.log(routes);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: routes
});

router.beforeEach(beforeEach);

export default router;

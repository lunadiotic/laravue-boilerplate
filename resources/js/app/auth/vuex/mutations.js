import localforage from "localforage";
import { isEmpty } from "lodash";

export const setToken = (state, token) => {
    if (isEmpty(token)) {
        localforage.removeItem("accesstoken");
        return;
    }
    localforage.setItem("accesstoken", token);
};

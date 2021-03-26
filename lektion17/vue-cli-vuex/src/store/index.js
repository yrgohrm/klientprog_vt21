import { createStore } from "vuex"
import mutations from "./mutations.js"

export { mutations }

export default createStore({
    state() {
        return {
            count: 0,
        }
    },
    mutations,
    actions: {},
})

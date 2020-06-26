import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from 'axios'

axios.defaults.baseURL = store.state.BASE_URL;
axios.defaults.timeout = 8000;

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import EventBus from "@/plugins/EventBus";
import ErrorHandler from "@/plugins/ErrorHandler";
import "./filters";
import 'normalize.css'

Vue.use(ErrorHandler)
Vue.use(EventBus)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
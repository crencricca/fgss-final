import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import scrollto from "./plugins/scrollto";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  scrollto,
  render: h => h(App)
}).$mount("#app");

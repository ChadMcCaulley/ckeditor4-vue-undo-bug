import App from "./App.vue";
import CKEditor from "ckeditor4-vue";
import Vue from "vue";

Vue.use(CKEditor)

new Vue({
  render: h => h(App)
}).$mount("#app");
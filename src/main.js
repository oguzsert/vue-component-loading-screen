import Vue from 'vue'
import App from './App.vue'
import VueComponentLoading from "./VueComponentLoadingScreenPlugin";
import "./vue-component-loading-screen.css";

Vue.config.productionTip = false
Vue.use(VueComponentLoading,{
  loadingImage:"./exampleloading.gif",
  overlayBackgroundColor:"rgba(0,0,0,0.3)"
});

new Vue({
  render: h => h(App),
}).$mount('#app')

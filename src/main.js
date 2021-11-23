import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vjsn from 'vue-js-spatial-navigation'

Vue.config.productionTip = false
const config = {
  straightOnly: false,
  straightOverlapThreshold: 0.5,
  rememberSource: false,
  disabled: false,
  defaultElement: "",
  enterTo: "",
  leaveFor: null,
  restrict: "self-first",
  tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
  navigableFilter: null,
  scrollOptions: { behavior: "smooth", block: "center" }
}
Vue.use(vjsn, config)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

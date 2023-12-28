import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFirestore from 'vue-firestore';


Vue.use(VueFirestore);

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

//Vue.use(Carousel);

//createApp(App).mount('#app')
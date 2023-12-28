import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';
import VueCalendar from 'vue-calendar';

import VueFirestore from 'vue-firestore';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueFirestore);
Vue.use(VueCalendar);

var config = {
  //databaseURL: "https://teste-provisorio-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyD62rX_DGnRyqLdoC43GZSqDI2Dm7imPCo",
  authDomain: "ms-med-3d898.firebaseapp.com",
  projectId: "ms-med-3d898",
  storageBucket: "ms-med-3d898.appspot.com",
  messagingSenderId: "489907942495",
  appId: "1:489907942495:web:902052296721aeaafe17ea",
  measurementId: "G-XQL4XRKPSS"
};

firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router: router,
      render: h => h(App)
    }).$mount('#app');
  }
});

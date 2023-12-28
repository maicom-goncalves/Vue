import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtD8Nr71kkkdwvznQ67AtGX3w8G_nVvaU",
    authDomain: "relojoaria-13806.firebaseapp.com",
    projectId: "relojoaria-13806",
    storageBucket: "relojoaria-13806.appspot.com",
    messagingSenderId: "599736417389",
    appId: "1:599736417389:web:0053ff7d3298cdc1089364",
    measurementId: "G-NNC9FW5SQZ"
});

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//db.settings({ timestampsInSnapshots:true })
export const db = firebaseApp.firestore();
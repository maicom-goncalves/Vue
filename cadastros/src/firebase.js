import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD62rX_DGnRyqLdoC43GZSqDI2Dm7imPCo",
    authDomain: "ms-med-3d898.firebaseapp.com",
    projectId: "ms-med-3d898",
    storageBucket: "ms-med-3d898.appspot.com",
    messagingSenderId: "489907942495",
    appId: "1:489907942495:web:902052296721aeaafe17ea",
    measurementId: "G-XQL4XRKPSS"
});

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

/* Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

//db.settings({ timestampsInSnapshots:true })
export const db = firebaseApp.firestore();
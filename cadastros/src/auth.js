import * as firebase from 'firebase'

var config = {
  // firebase config
  apiKey: "AIzaSyD62rX_DGnRyqLdoC43GZSqDI2Dm7imPCo",
  authDomain: "ms-med-3d898.firebaseapp.com",
  projectId: "ms-med-3d898",
  storageBucket: "ms-med-3d898.appspot.com",
  messagingSenderId: "489907942495",
  appId: "1:489907942495:web:902052296721aeaafe17ea",
  measurementId: "G-XQL4XRKPSS"
}

firebase.initializeApp(config)

var authService = {

  firebase: firebase,
  user: null,

  authenticated() {
    if (this.user == null) {
      return false
    } else {
      return !this.user.isAnonymous
    }
  },
  setUser(user) {
    this.user = user
  },

  login(email, password) {
    return this.firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setUser(user)
      })
  },

  logout() {
    this.firebase.auth().signOut().then(() => {
      console.log('logout done')
    })
  }
}
firebase.auth().onAuthStateChanged(user => {
  authService.setUser(user)
})

export default authService
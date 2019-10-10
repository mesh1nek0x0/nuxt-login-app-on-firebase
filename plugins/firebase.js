import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBNWDfHVJMINLBzejCwOuNIWCeKjNHe7mk",
    authDomain: "mesh1nek0x0-nuxt-login-app.firebaseapp.com",
    databaseURL: "https://mesh1nek0x0-nuxt-login-app.firebaseio.com",
    projectId: "mesh1nek0x0-nuxt-login-app",
    storageBucket: "mesh1nek0x0-nuxt-login-app.appspot.com",
    messagingSenderId: "654340893950",
    appId: "1:654340893950:web:97a27c59ef78022fb249af"
  })
}

export default firebase
<template>
  <section class="container">
      <button @click="googleLogin">Googleでログイン</button>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>
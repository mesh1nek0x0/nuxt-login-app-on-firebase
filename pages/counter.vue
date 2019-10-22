<template>
  <div>
    <h1>pages/counter</h1>
    <p>CURRENT: {{ $store.state.num }}</p>
    <button type="submit" @click="$store.dispatch('increment')">INC</button>
    <button type="submit" @click="$store.dispatch('decrement')">DEC</button>
    <hr />
    <button type="submit" @click="$store.dispatch('reset')">RESET</button>
    <hr />
    <nuxt-link to="/other-counter">GO TO OTHERS</nuxt-link>
  </div>
</template>

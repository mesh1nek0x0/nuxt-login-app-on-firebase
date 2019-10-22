<template>
  <div>
    <h1>pages/counter</h1>
    <p>CURRENT: {{ counter }}</p>
    <button type="submit" @click="handleIncrement">INC</button>
    <button type="submit" @click="handleDecrement">DEC</button>
    <hr />
    <button type="submit" @click="handleReset">RESET</button>
    <nuxt-link to="/other-counter">GO TO OTHERS</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    handleIncrement(event) {
      this.counter++;
    },
    handleDecrement(event) {
      this.counter--;
    },
    handleReset(event) {
      this.counter = 0;
    }
  }
};
</script>

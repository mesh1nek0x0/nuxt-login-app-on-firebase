<template>
  <div>
    <h1>pages/products</h1>
    <ul id="example-1">
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.name }}
        <ul>
          <li>{{ product.price }}</li>
          <li>{{ product.description }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  asyncData() {
    return {
      isWaiting: true,
      isLogin: false,
      products: []
    };
  },
  mounted: function() {
    const db = firebase.firestore();
    db.collection("products")
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push(doc.data());
        });
        this.products = data;
      });
  }
};
</script>

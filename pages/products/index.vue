<template>
  <div>
    <h1>pages/products</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <nuxt-link v-bind:to="{name:'products-product',params:{product: product.id}}">{{ product.name }}</nuxt-link>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
      </li>
    </ul>
    <hr />
    <div>
      <p>add some one?</p>
      <nuxt-link to="/products/add">ADD PRODUCT</nuxt-link>
    </div>
  </div>
  
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  asyncData() {
    return {
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
          data.push({id: doc.id, ...doc.data()});
        });
        this.products = data;
      });
  }
};
</script>

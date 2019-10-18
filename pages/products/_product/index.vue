<template>
    <div>
        <h1>pages/products/_product</h1>
        <h2>ID: {{id}}</h2>
        <form @submit.prevent="handleSubmit">
            <ul>
                <li>
                    <p>NAME</p>
                    <p> {{name}} </p>
                </li>
                <li>
                    <p>DESCRIPTION</p>
                    <p>{{ description }}</p>
                </li>
                <li>
                    <p>PRICE</p>
                    <p>{{ price }}</p>
                </li>
            </ul>
            <nuxt-link v-bind:to="{name:'products-product-edit',params:{product: id}}">EDIT THIS PRODUCT</nuxt-link>
        </form>
        <nuxt-link to="/products">GO BACK TO PRODUCT LIST</nuxt-link>
    </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  asyncData() {
    return {
      id: "loading...",
      name: "loading...",
      description: "loading...",
      price: "loading..."
    };
  },
  mounted: function() {
    const db = firebase.firestore();
    db.collection("products").doc(this.$route.params.product)
      .get()
      .then(snapshot => {
        let data = snapshot.data();
        this.id = snapshot.id
        this.name = data.name
        this.description = data.description
        this.price = data.price
      })
  }
};
</script>
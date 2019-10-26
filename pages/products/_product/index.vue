<template>
  <div>
    <h1>pages/products/_product</h1>
    <h2>ID: {{product.id}}</h2>
    <ul>
      <li>
        <p>NAME</p>
        <p>{{product.name}}</p>
      </li>
      <li>
        <p>DESCRIPTION</p>
        <p>{{ product.description }}</p>
      </li>
      <li>
        <p>PRICE</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
    <nuxt-link
      v-bind:to="{name:'products-product-edit',params:{product: product.id}}"
    >EDIT THIS PRODUCT</nuxt-link>
    <nuxt-link to="/products">GO BACK TO PRODUCT LIST</nuxt-link>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  async asyncData({ store }) {
    if (store.state.product.products.length) {
      return;
    }
    await store.dispatch("product/fetchProducts");
  },
  computed: {
    product() {
      const result = this.$store.state.product.products.filter(value => {
        return value.id == this.$route.params.product;
      });
      return result[0];
    }
  }
};
</script>

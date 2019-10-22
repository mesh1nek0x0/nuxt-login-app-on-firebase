<template>
  <div>
    <h1>pages/products</h1>
    <ul>
      <li v-for="product in $store.state.product.products" v-bind:key="product.id">
        <nuxt-link
          v-bind:to="{name:'products-product',params:{product: product.id}}"
        >{{ product.name }}</nuxt-link>
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
export default {
  async asyncData({ store }) {
    await store.dispatch("product/fetchProducts");
  }
};
</script>

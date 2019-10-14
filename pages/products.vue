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
export default {
  asyncData() {
    return {
      isWaiting: true,
      isLogin: false,
      products: []
    };
  },
  mounted: function() {
    this.products = [
      {
        id: "productId1",
        name: "product1",
        price: 2000,
        description: "this is product 1"
      },
      {
        id: "productId2",
        name: "product2",
        price: 3000,
        description: "this is product 2"
      }
    ];
  }
};
</script>

<template>
    <div>
        <h1>pages/products/add</h1>
        <h2>ADD PRODUCT</h2>
        <form @submit.prevent="handleSubmit">
            <ul>
                <li>
                    <p>NAME</p>
                    <input v-model="name" placeholder="input product name"/>
                </li>
                <li>
                    <p>DESCRIPTION</p>
                    <textarea v-model="description" placeholder="input product description"/>
                </li>
                <li>
                    <p>PRICE</p>
                    <input v-model="price" placeholder="input product price"/>
                </li>
            </ul>
            <button type="submit">ADD</button>
        </form>
        <hr />
        <nuxt-link to="/products">GO BACK TO PRODUCT LIST</nuxt-link>
    </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  asyncData() {
    return {
      name: "",
      description: "",
      price: ""
    };
  },

  methods: {
      handleSubmit(event) {
        const db = firebase.firestore();
        db.collection("products").add({
          name: this.name,
          description: this.description,
          price: this.price
        })
        .then(() => {
          alert(`${this.name} is added`);
          this.name = ""
          this.description = ""
          this.price = ""
        })
      }
  }
};
</script>
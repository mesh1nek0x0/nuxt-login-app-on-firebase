<template>
    <div>
        <h1>pages/products/_product/edit</h1>
        <h2>ID: {{id}}</h2>
        <nuxt-link v-bind:to="{name:'products-product',params:{product: id}}">GO BACK VIEW</nuxt-link>
        <form @submit.prevent="handleSubmit">
            <ul>
                <li>
                    <p>NAME</p>
                    <input v-model="name"/>
                </li>
                <li>
                    <p>DESCRIPTION</p>
                    <textarea v-model="description"/>
                </li>
                <li>
                    <p>PRICE</p>
                    <input v-model="price"/>
                </li>
            </ul>
            <button type="submit">UPDATE</button>
        </form>
        <hr />
        <nuxt-link to="/products">GO BACK TO PRODUCT LIST</nuxt-link>
        <hr />
        <div class="danger">
          <p>DANGER</p>
        <button @click="handleDelete">DELETE</button>
        </div>
    </div>
</template>

<style scoped>
.danger {
  color: red;
  float: right;
}
</style>

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
  },
  methods: {
      handleSubmit(event) {
        const db = firebase.firestore();
        db.collection("products").doc(this.id)
        .set({
          name: this.name,
          description: this.description,
          price: this.price
        })
        .then(() => {
          alert(`${this.id} is updated`);
        })
      },
      handleDelete(event) {
        const db = firebase.firestore();
        db.collection("products").doc(this.id).delete().then(() => {
          alert(`${this.id} has been deleted`)
          this.$router.push("/products")
        })
      }
  }
};
</script>
import firebase from "@/plugins/firebase";

export const state = () => ({
  products: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  addProduct(state, product) {
    // state.products = Object.assign(product, state.products);
    state.products.push(product)
  },
  updateProduct(state, oldProduct, product) {
      Object.assign(oldProduct, product)
  },
  deleteProduct(state, index) {
      state.products.splice(index, 1)
  }
};

export const actions = {
  async fetchProducts({ commit }) {
    const db = firebase.firestore();
    const data = await db
      .collection("products")
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });
        return data;
      });
    commit("setProducts", data);
  },
  async addProducts({ commit }, { product }) {
    const db = firebase.firestore();
    await db.collection("products").add({
      name: product.name,
      description: product.description,
      price: product.price
    });
    commit("addProduct", product);
  },
  async updateProduct({ state, commit }, product) {
    const db = firebase.firestore()
    await db.collection("products")
        .doc(product.id)
        .set(product.data)
    const oldProduct = state.products.find(val => {
        return val.id === product.id
    })
    commit('updateProduct', oldProduct, product.data)
  },
  async deleteProduct({ state, commit }, id) {
    const db = firebase.firestore()
    await db.collection("products")
        .doc(id)
        .delete()
    const index = state.products.indexOf(id)
    commit('deleteProduct', index)
  }
};

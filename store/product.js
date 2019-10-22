import firebase from "@/plugins/firebase";

export const state = () => ({
  products: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
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
  }
};

export const state = () => ({
  products: [{ id: 0, name: "daummy", price: 2000, description: "desc" }]
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  }
};

export const actions = {
  fetchProducts({ commit }) {
    commit("setProducts", [
      { id: 1, name: "aaa", price: 2000, description: "desc" }
    ]);
  }
};

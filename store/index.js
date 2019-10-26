export const state = () => ({
  num: 0
});

export const mutations = {
  add(state, num) {
    state.num += num;
  },
  reset(state) {
    state.num = 0;
  }
};

export const actions = {
  increment({ commit }) {
    commit("add", 1);
  },
  decrement({ commit }) {
    commit("add", -1);
  },
  reset({ commit }) {
    commit("reset");
  }
};

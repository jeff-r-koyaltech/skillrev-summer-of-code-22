import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedInUser: '',
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedInUser !== '';
    },
  },
  mutations: {
    login(state, payload) {
      state.loggedInUser = payload;
    },
    logout(state) {
      state.loggedInUser = '';
    },
  },
  actions: {
  },
  modules: {
  },
});

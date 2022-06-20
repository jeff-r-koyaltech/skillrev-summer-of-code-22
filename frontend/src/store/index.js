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
  },
  actions: {
  },
  modules: {
  },
});

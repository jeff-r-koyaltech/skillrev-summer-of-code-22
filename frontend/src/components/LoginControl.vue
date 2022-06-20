<template>
  <div>
    <button v-if="!isLoggedIn" @click="loginClick">Login</button>
    <label for="userName">
      <input v-if="!isLoggedIn"
        type="text" id="userName"
        v-model="userNameValue" />
    </label>

    <span v-if="isLoggedIn">Logged in as user: {{loggedInUser}}</span>
    <button v-if="isLoggedIn" @click="logoutClick">Logout</button>
  </div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapMutations,
} from 'vuex';

export default {
  name: 'LoginControl',
  data: () => ({
    userNameValue: '',
  }),
  methods: {
    ...mapMutations([
      'login',
      'logout',
    ]),
    loginClick() {
      this.login(this.userNameValue);
      this.userNameValue = '';
    },
    logoutClick() {
      this.logout();
    },
  },
  computed: {
    ...mapState([
      'loggedInUser',
    ]),
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
};
</script>

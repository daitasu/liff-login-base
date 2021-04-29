<template>
  <div>
    <div v-if="loggedin">ログイン中です</div>
    <button
      v-if="!loggedin"
      target="_blank"
      rel="noopener noreferrer"
      class="button--green"
      @click="handleLogin"
    >
      LIFF LOGIN
    </button>
    <button
      v-else
      target="_blank"
      rel="noopener noreferrer"
      @click="handleLogout"
    >
      LIFF LOGOUT
    </button>
  </div>
</template>

<script lang="ts">
import { liff } from '@line/liff';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      loggedin: false,
    };
  },
  mounted() {
    liff
      .init({
        liffId: process.env.LIFF_ID || '',
      })
      .then(() => {
        this.setLoginStatus();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    setLoginStatus() {
      this.loggedin = liff.isLoggedIn();
    },
    handleLogin() {
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    },
    handleLogout() {
      liff.logout();
      this.setLoginStatus();
    },
  },
});
</script>

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
import liff from '@line/liff';
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const loggedin = ref(false);

    const setLoginStatus = () => {
      loggedin.value = liff.isLoggedIn();
    };

    const handleLogin = () => {
      if (!liff.isLoggedIn()) {
        liff.login();
        setLoginStatus();
      }
    };
    const handleLogout = () => {
      liff.logout();
      setLoginStatus();
    };

    onMounted(() => {
      liff
        .init({
          liffId: process.env.LIFF_ID || '',
        })
        .then(() => {
          setLoginStatus();
        })
        .catch((err) => {
          console.error(err);
        });
    });

    return {
      loggedin,
      handleLogin,
      handleLogout,
    };
  },
});
</script>

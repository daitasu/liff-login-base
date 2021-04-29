<template>
  <div>
    <div v-if="loggedIn">ログイン中です</div>
    <button
      v-if="!loggedIn"
      target="_blank"
      rel="noopener noreferrer"
      class="button--green"
      @click="liffLogin"
    >
      LIFF LOGIN
    </button>
    <button
      v-else
      target="_blank"
      rel="noopener noreferrer"
      @click="liffLogout"
    >
      LIFF LOGOUT
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { liffLogin, liffLogout } from '~/utils/liff';
import { getters } from '~/models/state';

export default defineComponent({
  setup() {
    const loggedIn = computed(() => getters.loggedIn());

    return {
      loggedIn,
      liffLogin,
      liffLogout,
    };
  },
});
</script>

import Vue from 'vue';

type LoginState = {
  liffLoggedIn: boolean;
};

export const state = Vue.observable<LoginState>({
  liffLoggedIn: false,
});

export const getters = {
  loggedIn(): boolean {
    return state.liffLoggedIn;
  },
};

export const mutations = {
  SET_LOGGEDIN(liffLoggedIn: boolean): void {
    state.liffLoggedIn = liffLoggedIn;
  },
};

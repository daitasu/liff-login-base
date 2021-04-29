import Vue from 'vue';

type State = {
  liffLoggedIn: boolean;
};

export const state = Vue.observable<State>({
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

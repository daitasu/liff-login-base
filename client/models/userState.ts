import Vue from 'vue';

type User = {
  id: string;
  name: string;
  profileImageUrl: string;
};

type UserState = {
  user: User;
};

export const state = Vue.observable<UserState>({
  user: { id: '', name: '', profileImageUrl: '' },
});

export const getters = {
  user(): User {
    return state.user;
  },
};

export const mutations = {
  SET_USER(user: User): void {
    state.user = { ...user };
  },
};

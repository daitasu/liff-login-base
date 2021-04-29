import liff from '@line/liff';
import { mutations as loginMutations } from '~/models/loginState';

export const liffInit: Promise<void> = liff.init({
  liffId: process.env.LIFF_ID || '',
});

export const liffIDToken: string = liff.getIDToken() || '';

export const isLoggedIn: boolean = liff.isLoggedIn();

export const liffLogin = (): void => {
  if (!isLoggedIn) {
    liff.login();
  }
};
export const liffLogout = (): void => {
  liff.logout();
  loginMutations.SET_LOGGEDIN(liff.isLoggedIn());
};

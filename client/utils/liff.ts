import liff from '@line/liff';
import { mutations } from '~/models/state';

const setLoggedIn = () => {
  mutations.SET_LOGGEDIN(liff.isLoggedIn());
};

export const liffInit = () => {
  liff
    .init({
      liffId: process.env.LIFF_ID || '',
    })
    .then(() => {
      setLoggedIn();
    })
    .catch((err) => {
      console.error(err);
    });
};
export const liffLogin = () => {
  if (!liff.isLoggedIn()) {
    liff.login();
    setLoggedIn();
  }
};
export const liffLogout = () => {
  liff.logout();
  setLoggedIn();
};

import { mutations as userMutations } from '~/models/userState';
import { mutations as loginMutations, getters } from '~/models/loginState';

import { createUser, getUser } from '~/utils/user';
import { liffInit, liffIDToken, isLoggedIn } from '~/utils/liff';

export default function () {
  liffInit
    .then(() => {
      loginMutations.SET_LOGGEDIN(isLoggedIn);

      if (getters.loggedIn()) {
        let user;
        if (liffIDToken) {
          user = getUser(liffIDToken);
          if (!user) {
            user = createUser(liffIDToken);
          }
          userMutations.SET_USER(user);
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

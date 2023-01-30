import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import initFirebase from '../firebase';
import { removeUserCookie, setUserCookie, getUserFromCookie } from './userCookie';

initFirebase();

export type User = {
  email: string;
  password: string;
};

export const mapUserData = async (user: any) => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token
  };
};

const useUser = () => {
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (userToken) => {
      if (userToken) {
        const userData: any = await mapUserData(userToken);
        setUserCookie(userData);
        setUser(userData);
      } else {
        removeUserCookie();
        setUser({ email: '', password: '' });
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return;
    }
    setUser(userFromCookie);
    return () => cancelAuthListener;
  }, []);

  return { user, logout };
};

export { useUser };

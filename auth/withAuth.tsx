/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import initFirebase from '../firebase';

initFirebase();
const auth = firebase.auth();

const withAuth = (Component: any) => (props: any) => {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push('/signin');
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;

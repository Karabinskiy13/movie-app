import React from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import RegistrationForm from '../../src/components/RegistrationForm/RegistrationForm';
import { setUser } from '../../src/store/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        router.push('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <RegistrationForm title="sign in" handleClick={handleLogin} />
    </div>
  );
};

export default Login;

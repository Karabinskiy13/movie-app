import React from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import RegistrationForm from '../../src/components/RegistrationForm/RegistrationForm';
import { setUser } from '../../src/store/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        router.push('/');
      })
      .catch(console.error);
  };
  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm title="Login" handleClick={handleRegister} />;
      <p>
        Already have account?
        <Link href={'/login'}>Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;

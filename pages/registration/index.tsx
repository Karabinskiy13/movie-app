import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
// import RegistrationForm from '../../src/components/RegistrationForm/RegistrationForm';
import { setUser } from '../../src/store/authSlice';
import { title } from 'process';
import { Body, Wrapper, Form, Label, Input, Button } from '../../styles/RegistrationForm';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [emailstate, setEmail] = useState('');
  const [passwordstate, setPassword] = useState('');

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        router.push('/');
        console.log(user);
      })
      .catch(console.error);

    console.log(email, password);
  };
  return (
    <div>
      <h1>Register</h1>
      <Body style={{ backgroundColor: 'black' }}>
        <Wrapper>
          <div className="shape"></div>
          <div className="shape"></div>
        </Wrapper>
        <Form>
          <h3>Login Here</h3>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="Email or Phone"
            id="username"
            value={emailstate}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={passwordstate}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => handleRegister(emailstate, passwordstate)}>{title}</Button>
          <Button>
            <Link href={'/registration'}>Registration</Link>
          </Button>
        </Form>
      </Body>
      <p>
        Already have account?
        <Link href={'/login'}>Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;

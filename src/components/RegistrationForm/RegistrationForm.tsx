import Link from 'next/link';
import React, { useState } from 'react';
import { Body, Button, Form, Input, Label, Wrapper } from '../../../styles/RegistrationForm';

export type RegistrationFormPrors = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const RegistrationForm = ({ title, handleClick }: RegistrationFormPrors) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => handleClick(email, password)}>{title}</Button>
        <Button>
          <Link href={'/registration'}>Registration</Link>
        </Button>
      </Form>
    </Body>
  );
};

export default RegistrationForm;

/* eslint-disable react/prop-types */
import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';

import { GlobalStyle } from '../styles/globals';
import Header from '../src/components/Header/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyle />
    <Header />
    <Component {...pageProps} />
  </div>
);

export default MyApp;

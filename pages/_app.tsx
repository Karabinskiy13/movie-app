/* eslint-disable react/prop-types */
import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/Slider.css';
import { GlobalStyle } from '../styles/globals';
import Layout from '../src/components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyle />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;

import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from '../styles/globals';
import Layout from '../src/components/Layout/Layout';
import Head from 'next/head';
import { persistor, wrapper } from '../src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PersistGate loading={null} persistor={persistor}>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </PersistGate>
);

export default wrapper.withRedux(MyApp);

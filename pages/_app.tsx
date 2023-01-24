import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from '../styles/globals';
import Layout from '../src/components/Layout/Layout';
import Head from 'next/head';

import { FavoritesProvider } from '../src/context/favoritesContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <FavoritesProvider>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </FavoritesProvider>
);

export default MyApp;

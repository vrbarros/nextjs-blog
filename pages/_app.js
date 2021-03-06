import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Head from 'next/head';

import SWRProvider from '@/containers/SWRProvider';
import MaterialUIProvider from '@/containers/MaterialUIProvider';

export const cache = createCache({ key: 'css' });

function MyApp(props) {
  const { Component, pageProps } = props;

  const Layout = Component.Layout || Fragment;

  return (
    <SWRProvider>
      <Head>
        <title>victorbarros.com</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={cache}>
        <MaterialUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MaterialUIProvider>
      </CacheProvider>
    </SWRProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

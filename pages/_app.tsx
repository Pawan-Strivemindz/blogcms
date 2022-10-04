import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global.scss';
import React, { useEffect } from 'react';
import {Layout} from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

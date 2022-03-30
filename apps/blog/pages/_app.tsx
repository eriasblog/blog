import { AppProps } from 'next/app';
import { UtilSearchModal } from '@blog/util/search/modal';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
          <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

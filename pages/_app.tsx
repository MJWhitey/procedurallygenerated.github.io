/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import "../styles.css";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <title>Matthew White - Engineering Lead & Software Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

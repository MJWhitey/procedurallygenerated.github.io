/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import "../styles.css";
import { prefix } from "../utils/prefix";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi" />
        <title>Matthew White - Engineering Lead & Software Developer</title>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://procedurallygenerated.net" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matthew White - Engineering Lead & Software Developer" />
        <meta property="og:description" content="Building technology products that deliver meaningful outcomes for businesses and their customers." />
        <meta property="og:image" content={`${prefix}/pg-open-graph.jpg`} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="procedurallygenerated.net" />
        <meta property="twitter:url" content="https://procedurallygenerated.net" />
        <meta name="twitter:title" content="Matthew White - Engineering Lead & Software Developer" />
        <meta name="twitter:description" content="Building technology products that deliver meaningful outcomes for businesses and their customers." />
        <meta name="twitter:image" content={`${prefix}/pg-open-graph.jpg`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

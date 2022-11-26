import type { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MZN App Lab</title>
        <meta name="description" content="App development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
    </>
  );
};

export default Home;

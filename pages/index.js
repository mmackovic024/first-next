import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';
import fetch from 'isomorphic-unfetch';

const Home = ({ launches }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Hero />
      <LaunchesList launches={launches} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 54px 0 0 0;
          background-color: #f3f3f3;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches/past');
  const launches = await res.json();
  return { launches };
};

export default Home;

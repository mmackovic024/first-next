import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import fetch from 'isomorphic-unfetch';

const Home = ({ launches }) => {
  console.log(launches);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Hero />
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches/past');
  const launches = await res.json();
  return { launches };
};

export default Home;

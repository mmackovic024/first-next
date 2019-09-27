import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';

const Home = ({ launches }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <div className="container">
        <Hero />
        <LaunchesList launches={launches} />
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches/past');
  const launches = await res.json();
  return { launches };
};

export default Home;

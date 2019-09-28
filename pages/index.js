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
        <h4>
          <span style={{ color: 'green' }}>Launch</span> success
        </h4>
        <h4>
          <span style={{ color: 'red' }}>Launch</span> fail
        </h4>
        <LaunchesList launches={launches} />
        <style jsx>{`
          h4 {
            display: inline;
            vertical-align: middle;
            margin: 2rem;
          }
        `}</style>
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

import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';

const Home = ({ launches }) => {
  return (
    <>
      <Head>
        <title>SpaceX Launches</title>
      </Head>

      <Header />
      <div className="container">
        <Hero />
        <div className="legend">
          <h4>
            <span style={{ color: 'green' }}>Launch</span> success
          </h4>
          <h4>
            <span style={{ color: 'red' }}>Launch</span> fail
          </h4>
        </div>
        <LaunchesList launches={launches} />
        <style jsx>{`
          .legend {
            width: 35%;
            margin: 0 auto;
            padding: 0.5rem;
            background-color: rgba(10, 10, 10, 0.7);
            border-radius: 3px;
          }

          h4 {
            display: inline;
            vertical-align: middle;
            margin: 2rem;
            color: #bbb;
          }

          @media (max-width: 1150px) {
            .legend {
              width: 55%;
            }
          }

          @media (max-width: 650px) {
            .legend {
              width: 95%;
            }

            h4 {
              margin: 2rem 0.5rem;
            }
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

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';

const Home = () => {
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
        <LaunchesList />
        <style jsx>{`
          .legend {
            width: 60%;
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

          @media (max-width: 1000px) {
            .legend {
              width: 80%;
            }
          }

          @media (max-width: 650px) {
            .legend {
              width: 90%;
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

export default Home;

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';
import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>SpaceX Launches</title>
      </Head>

      <Header />
      <div className="container">
        <Hero />
        <div className={styles.legend}>
          <h4>
            <span className="success">Launch</span> success
          </h4>
          <h4>
            <span className="fail">Launch</span> fail
          </h4>
        </div>
        <LaunchesList />
      </div>
    </>
  );
};

export default Home;

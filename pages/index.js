import Head from 'next/head';
import LaunchContext from '../components/LaunchContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';
import styles from '../styles/index.module.scss';

const Home = () => {
  const { launches, error } = React.useContext(LaunchContext);

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
        {error && <h1 className="msg">{error}</h1>}
        {!error && launches && <LaunchesList launches={launches} />}
      </div>
    </>
  );
};

export default Home;

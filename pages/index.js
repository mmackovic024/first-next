import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';
import styles from '../styles/index.module.scss';
// import LaunchContext from '../components/LaunchContext';

const Home = ({ data }) => {
  // const { launches, setLaunches } = React.useContext(LaunchContext);
  // React.useEffect(() => {
  //   if (launches.length === 0) setLaunches({ launches: data });
  // }, [data]);
  const launches = data;

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
        {launches.error && <h1 className="msg">{launches.error}</h1>}
        {/* {!launches.error && <LaunchesList launches={launches.length > 0 ? launches : data} />} */}
        {!launches.error && <LaunchesList launches={launches} />}
      </div>
    </>
  );
};

Home.getInitialProps = async ({ req }) => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/past');
  const data = await response.json();
  return { data };
};

export default Home;

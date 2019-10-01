import Head from 'next/head';
import { useRouter } from 'next/router';
import LaunchContext from '../../components/LaunchContext';
import Header from '../../components/Header';
import LaunchPage from '../../components/LaunchPage';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const { launches, error } = React.useContext(LaunchContext);
  const currLaunch = launches && launches.find(launch => launch.flight_number === +id);

  return (
    <>
      <Head>
        <title>SpaceX - launch #{id}</title>
      </Head>
      <Header />
      {error && <h1 className="msg">{error}</h1>}
      {!error && currLaunch && <LaunchPage launch={currLaunch} />}
    </>
  );
};

export default Details;

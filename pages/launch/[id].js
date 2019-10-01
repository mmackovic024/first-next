import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
// import LaunchContext from '../../components/LaunchContext';
import Header from '../../components/Header';
import LaunchPage from '../../components/LaunchPage';

const Details = ({ launch }) => {
  const router = useRouter();
  const { id } = router.query;
  // const { launches } = React.useContext(LaunchContext);
  // let currLaunch = {};
  // if (launches.length === 0) {
  //   currLaunch = launch;
  // } else {
  //   currLaunch = launches.length > 0 && launches.find(launch => launch.flight_number === +id);
  // }

  return (
    <>
      <Head>
        <title>SpaceX - launch #{id}</title>
      </Head>
      <Header />
      <LaunchPage launch={launch} />
    </>
  );
};

Details.getInitialProps = async ({ req, query }) => {
  const response = await fetch(`https://api.spacexdata.com/v3/launches/${query.id}`);
  const launch = await response.json();
  return { launch };
};

export default Details;

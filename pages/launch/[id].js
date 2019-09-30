import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import LaunchPage from '../../components/LaunchPage';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>SpaceX - launch #{id}</title>
      </Head>
      <Header />
      <LaunchPage id={id} />
    </>
  );
};

export default Details;

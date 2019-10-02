import { useRouter } from 'next/router';
import { withApollo } from '../../lib/withApollo';
import Layout from '../../components/Layout';
import LaunchPage from '../../components/LaunchPage';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <LaunchPage id={id} />
    </Layout>
  );
};

export default withApollo(Details);

import { withApollo } from '../lib/withApollo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import LaunchesList from '../components/LaunchesList';
import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default withApollo(Home);

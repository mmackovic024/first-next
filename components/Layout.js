import '../styles/global.scss';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>SpaceX Launches</title>
    </Head>

    <Header />
    <div className="container">{children}</div>
  </>
);

export default Layout;

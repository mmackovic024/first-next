import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import LaunchContext from './LaunchContext';
import styles from '../styles/header.module.scss';

const Header = () => {
  const { launches } = React.useContext(LaunchContext);
  const [isNext, setNext] = React.useState(false);
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (router.route !== '/' && launches) {
      setNext(+id !== launches.length);
    }
  }, [id, launches]);

  return (
    <header className={styles.header}>
      <div className={styles.navBtn}>
        {+id - 1 > 0 && (
          <Link href="/launch/[id]" as={`/launch/${+id - 1}`}>
            <h1>˂ #{+id - 1}</h1>
          </Link>
        )}
      </div>
      <Link href="/">
        <h1>SpaceX launches</h1>
      </Link>
      <div className={styles.navBtn}>
        {isNext && router.route !== '/' && (
          <Link href="/launch/[id]" as={`/launch/${+id + 1}`}>
            <h1>#{+id + 1} ˃</h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styles from '../styles/header.module.scss';

export const NEXT_LAUNCH = gql`
  query nextLaunch($range: LaunchRange) {
    launches(range: $range) {
      flight_number
      mission_name
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      launch_date_local
    }
  }
`;

const Header = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery(NEXT_LAUNCH, { variables: { range: 'next' } });

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
        {data && router.route !== '/' && +id < data.launches[0].flight_number - 1 && (
          <Link href="/launch/[id]" as={`/launch/${+id + 1}`}>
            <h1>#{+id + 1} ˃</h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

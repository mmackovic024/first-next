import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import LaunchCard from './LaunchCard';
import styles from '../styles/list.module.scss';

const PAST_LAUNCHES = gql`
  query pastLaunches($range: LaunchRange) {
    launches(range: $range) {
      flight_number
      mission_name
      launch_success
      links {
        mission_patch_small
      }
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

const LaunchesList = () => {
  const { loading, error, data } = useQuery(PAST_LAUNCHES, { variables: { range: 'past' } });

  if (loading) return <h1 className="msg">Loading...</h1>;

  if (error) return <h1 className="msg">Error fetching data</h1>;

  const { launches } = data;

  return (
    <div className={styles.list}>
      {launches.map(launch => (
        <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchesList;

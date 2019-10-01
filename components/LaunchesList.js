import React from 'react';
import LaunchCard from './LaunchCard';
import styles from '../styles/list.module.scss';

const LaunchesList = ({ launches }) => {
  return (
    <>
      {launches && (
        <div className={styles.list}>
          {launches.map(launch => (
            <LaunchCard key={launch.flight_number} launch={launch} />
          ))}
        </div>
      )}
    </>
  );
};

export default LaunchesList;

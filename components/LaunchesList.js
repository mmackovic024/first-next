import React from 'react';
import LaunchCard from './LaunchCard';
import LaunchContext from './LaunchContext';
import styles from '../styles/list.module.scss';

const LaunchesList = () => {
  const { pending, error, launches } = React.useContext(LaunchContext);

  return (
    <>
      {pending && !error && <h2 className="msg">Loading... </h2>}
      {!pending && error && <h2 className="msg">Error {error}</h2>}
      {!pending && !error && (
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

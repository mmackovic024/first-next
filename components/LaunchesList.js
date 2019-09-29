import React from 'react';
import LaunchCard from './LaunchCard';
import LaunchContext from './LaunchContext';

const LaunchesList = () => {
  const { pending, error, launches } = React.useContext(LaunchContext);

  return (
    <>
      {pending && !error && <h2>Loading... </h2>}
      {!pending && error && <h2>Error {error}</h2>}
      {!pending && !error && (
        <div className="list">
          {launches.map(launch => (
            <LaunchCard key={launch.flight_number} launch={launch} />
          ))}
        </div>
      )}
      <style jsx>{`
        h2 {
          color: #fff;
        }

        .list {
          width: 100%;
          margin: 1rem auto;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-items: center;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default LaunchesList;

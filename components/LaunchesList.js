import LaunchCard from './LaunchCard';

const LaunchesList = ({ launches }) => {
  return (
    <div className="list">
      {launches.map(launch => (
        <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
      <style jsx>{`
        .list {
          width: 100%;
          margin: 0 auto;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-items: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default LaunchesList;

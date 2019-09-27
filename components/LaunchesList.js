import LaunchCard from './LaunchCard';

const LaunchesList = ({ launches }) => {
  return (
    <div className="list">
      {launches.map(launch => (
        <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
      <style jsx>{`
        .list {
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-items: space-between;
        }
      `}</style>
    </div>
  );
};

export default LaunchesList;

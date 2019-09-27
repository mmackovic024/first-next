const LaunchCard = ({ launch }) => {
  return (
    <div className="card">
      <h2>Launch #{launch.flight_number}</h2>
      <h3>Mission {launch.mission_name}</h3>
      <style jsx>{`
        .card {
          width: 33%;
          height: 200px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default LaunchCard;

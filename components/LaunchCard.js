const LaunchCard = ({ launch }) => {
  return (
    <div className="card">
      <h2>Launch #{launch.flight_number}</h2>
      <h3>Mission {launch.mission_name}</h3>
      <style jsx>{`
        .card {
          width: 31%;
          height: 200px;
          text-align: center;
          border: 1px solid black;
          margin: 5px;
        }
      `}</style>
    </div>
  );
};

export default LaunchCard;

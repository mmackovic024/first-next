export default function Hero() {
  const [nextL, setNextL] = React.useState({});

  React.useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/next')
      .then(res => res.json())
      .then(data => setNextL(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="hero">
      <h2>Next launch</h2>
      {'flight_number' in nextL && (
        <>
          <h3>#{nextL.flight_number}</h3>
          <p>Mission: {nextL.mission_name}</p>
          <p>Rocket: {nextL.rocket.rocket_name}</p>
          <p>Launch site: {nextL.launch_site.site_name_long}</p>
          <p>Scheduled date: {nextL.launch_date_local.split('T')[0]}</p>
        </>
      )}
      <style jsx>{`
        .hero {
          margin: 3rem auto;
          padding: 1rem;
          text-align: center;
          width: 60%;
          border: 1px solid #ccc;
          box-shadow: 1px 2px 4px lightgrey;
        }
      `}</style>
    </div>
  );
}

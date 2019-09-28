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
      {'flight_number' in nextL && (
        <>
          <h2>Next launch</h2>
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
          height: 260px;
          background-color: rgba(15, 15, 15, 0.7);
          border-radius: 5px;
        }

        h2,
        h3,
        p {
          color: rgba(255, 255, 255, 0.9);
          animation: grow 1s;

          @keyframes grow {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }

            to {
              transform: translateY(0px);
              opacity: 0.9;
            }
          }
        }

        p {
          font-weight: 600;
        }

        @media (max-width: 1000px) {
          .hero {
            width: 80%;
          }
        }

        @media (max-width: 650px) {
          .hero {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}

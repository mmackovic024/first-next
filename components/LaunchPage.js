import LaunchContext from './LaunchContext';

const LaunchPage = ({ id }) => {
  const { pending, error, launches } = React.useContext(LaunchContext);
  const launch = launches && launches.find(launch => launch.flight_number === +id);

  return (
    <>
      <div className="container">
        {pending && !error && <h3>Loading ...</h3>}
        {!pending && error && <h2>Error {error}</h2>}
        {!pending && !error && launch && (
          <>
            <h1>Launch #{launch.flight_number}</h1>
            <h2>Mission {launch.mission_name}</h2>
            <section>
              <img src={launch.links.mission_patch_small} alt="patch" />
              <div>
                <p>Launch date local: {launch.launch_date_local.split('T')[0]}</p>
                <p>Launch site: {launch.launch_site.site_name_long}</p>
                <p>Launch success: {launch.launch_success ? 'YES' : 'NO'}</p>
                <p>Rocket: {launch.rocket.rocket_name}</p>
                <p>{launch.details}</p>
              </div>
            </section>
            <section>
              {launch.links.flickr_images.length > 0 ? (
                launch.links.flickr_images.map((img, i) => (
                  <img key={`${launch.flight_number}${i}`} src={img} alt="launch" />
                ))
              ) : (
                <p>No images</p>
              )}
            </section>
          </>
        )}
      </div>
      <style jsx>{`
        h1,
        h2,
        h3,
        p {
          color: #eee;
        }

        h1,
        h2 {
          animation: slideDown 1s;

          @keyframes slideDown {
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
          animation: slideLeft 1s;

          @keyframes slideLeft {
            from {
              transform: translateX(150px);
              opacity: 0;
            }

            to {
              transform: translateX(0px);
              opacity: 0.9;
            }
          }
        }

        section {
          padding: 2rem 1rem;
          margin: 0 auto;
          width: 95%;
          border-radius: 5px;
          background-color: rgba(20, 20, 20, 0.8);
          margin-bottom: 10px;
        }

        section:not(:last-child) > div {
          margin-left: 2rem;
        }

        section:not(:last-child) {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }

        section:not(:last-child) > img {
          width: 30%;
          margin: 5px;
          animation: slideRight 1s;

          @keyframes slideRight {
            from {
              transform: translateX(-150px);
            }

            to {
              transform: translateX(0px);
            }
          }
        }

        section:last-child {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        section:last-child > img {
          height: 250px;
          margin: 5px;
          border: 1px solid white;
          border-radius: 5px;
          animation: slideUp 1.2s;

          @keyframes slideUp {
            from {
              transform: translateY(150px);
            }

            to {
              transform: translateY(0px);
            }
          }
        }

        @media (max-width: 650px) {
          section {
            padding: 1rem 0;
          }

          section:not(:last-child) {
            flex-direction: column;
          }

          section:not(:last-child) > div {
            margin-left: 0;
          }

          section:not(:last-child) > img {
            width: 40%;
          }

          section:last-child > img {
            height: auto;
            width: 90%;
            margin: 5px 0;
          }
        }
      `}</style>
    </>
  );
};

export default LaunchPage;

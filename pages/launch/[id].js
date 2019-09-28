import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Header from '../../components/Header';

const Details = ({ launch }) => {
  return (
    <>
      <Head>
        <title>SpaceX - launch #{launch.flight_number}</title>
      </Head>
      <Header />
      <div className="container">
        <h1>Launch #{launch.flight_number}</h1>
        <h2>Mission {launch.mission_name}</h2>
        <section>
          <img src={launch.links.mission_patch} alt="patch" />
          <div>
            <p>Launch date local: {launch.launch_date_local.split('T')[0]}</p>
            <p>Launch site: {launch.launch_site.site_name_long}</p>
            <p>Launch success: {launch.launch_success ? 'YES' : 'NO'}</p>
            <p>Rocket: {launch.rocket.rocket_name}</p>
            <p>{launch.details}</p>
          </div>
        </section>
        <section>
          {launch.links.flickr_images.length > 0
            ? launch.links.flickr_images.map((img, i) => (
                <img key={`${launch.flight_number}${i}`} src={img} alt="launch" />
              ))
            : 'No images'}
        </section>
        <style jsx>{`
          h1,
          h2,
          p {
            color: #eee;
          }
          section {
            padding: 2rem 1rem;
          }

          section:not(:last-child) > div {
            margin-left: 2rem;
          }

          section:not(:last-child) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          section:not(:last-child) > img {
            width: 30%;
            margin: 5px;
          }

          section:last-child {
            width: 100%;
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
      </div>
    </>
  );
};

Details.getInitialProps = async props => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/${props.query.id}`);
  const launch = await res.json();
  return { launch };
};

export default Details;

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styles from '../styles/page.module.scss';

const ONE_LAUNCH = gql`
  query oneLaunch($id: String) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_success
      links {
        mission_patch_small
        flickr_images
      }
      launch_date_local
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      details
    }
  }
`;

const LaunchPage = ({ id }) => {
  const { loading, error, data } = useQuery(ONE_LAUNCH, { variables: { id } });

  if (loading) return <h1 className="msg">Loading...</h1>;

  if (error) return <h1 className="msg">Error fetching data</h1>;

  const { launch } = data;
  const images = launch.links.flickr_images.map(img => img.replace(/_o./, '_q.'));

  return (
    <div className="container">
      <div className={styles.content}>
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
          {images.length > 0 ? (
            images.map((img, i) => (
              <img key={`${launch.flight_number}${i}`} src={img} alt="launch" />
            ))
          ) : (
            <p>No images</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default LaunchPage;

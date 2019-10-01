// import LaunchContext from './LaunchContext';
import styles from '../styles/page.module.scss';

const LaunchPage = ({ launch }) => {
  // const { pending, error, launches } = React.useContext(LaunchContext);
  // const launch = launches && launches.find(launch => launch.flight_number === +id);
  const images = launch && launch.links.flickr_images.map(img => img.replace(/_o./, '_q.'));

  return (
    <>
      <div className="container">
        {/* {pending && !error && <h3 className="msg">Loading ...</h3>}
        {!pending && error && <h2 className="msg">Error {error}</h2>} */}
        {launch && (
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
        )}
        {!launch && <h2 className="msg">Error {error}</h2>}
      </div>
    </>
  );
};

export default LaunchPage;

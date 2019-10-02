import Link from 'next/link';
import styles from '../styles/card.module.scss';

const LaunchCard = ({ launch }) => {
  return (
    <Link href="/launch/[id]" as={`/launch/${launch.flight_number}`}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <h3 className={launch.launch_success ? 'success' : 'fail'}>#{launch.flight_number}</h3>
        </div>
        <div className={styles.cardContent}>
          <img src={launch.links.mission_patch_small} alt="patch" />
          <div className={styles.details}>
            <h3>{launch.mission_name}</h3>
            <p>{launch.rocket.rocket_name}</p>
            <p>{launch.launch_site.site_name_long}</p>
            <p>{launch.launch_date_local.split('T')[0]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LaunchCard;

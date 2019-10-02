import styles from '../styles/hero.module.scss';
import { useQuery } from '@apollo/react-hooks';
import { NEXT_LAUNCH } from './Header';

export default function Hero() {
  const { loading, error, data } = useQuery(NEXT_LAUNCH, { variables: { range: 'next' } });
  let heroContent;

  if (loading)
    return (
      <div className={styles.hero}>
        <h2 className="msg">Loading...</h2>
      </div>
    );

  if (error)
    return (
      <div className={styles.hero}>
        <h2 className="msg">Error fetching data</h2>
      </div>
    );

  const launch = data.launches[0];

  return (
    <div className={styles.hero}>
      <h2>Next launch</h2>
      <h3>#{launch.flight_number}</h3>
      <p>Mission: {launch.mission_name}</p>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch site: {launch.launch_site.site_name_long}</p>
      <p>Scheduled date: {launch.launch_date_local.split('T')[0]}</p>
    </div>
  );
}

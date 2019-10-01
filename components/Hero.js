import styles from '../styles/hero.module.scss';
import fetch from 'isomorphic-unfetch';

export default function Hero() {
  const [nextL, setNextL] = React.useState({});

  React.useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/next')
      .then(res => res.json())
      .then(data => setNextL(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.hero}>
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
    </div>
  );
}

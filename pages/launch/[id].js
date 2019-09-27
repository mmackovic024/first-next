import fetch from 'isomorphic-unfetch';
import Header from '../../components/Header';

const Details = ({ launch }) => {
  console.log('details ', launch);
  return (
    <>
      <Header />
      <div className="container">
        <h1>Launch #{launch.flight_number}</h1>
        <h1>Mission {launch.mission_name}</h1>
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

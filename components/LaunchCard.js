import Link from 'next/link';

const LaunchCard = ({ launch }) => {
  return (
    <Link href="/launch/[id]" as={`/launch/${launch.flight_number}`}>
      <div className="card">
        <div className="card-title">
          <h3 className={launch.launch_success ? 'success' : 'fail'}>
            Launch #{launch.flight_number}
          </h3>
        </div>
        <div className="card-content">
          <img src={launch.links.mission_patch} alt="patch" />
          <div className="details">
            <h3>Mission: {launch.mission_name}</h3>
            <p>Launch site: {launch.launch_site.site_name_long}</p>
            <p>Launch date: {launch.launch_date_local.split('T')[0]}</p>
          </div>
        </div>
        <style jsx>{`
          .card {
            cursor: pointer;
            width: calc((100% / 3) - 20px);
            height: 200px;
            margin: 5px;
            padding: 0.25rem;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 1px 2px 4px lightgrey;
          }

          .card-title {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #ccc;
          }

          .card-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
          }

          img {
            width: 30%;
          }

          .details {
            width: 65%;
            text-align: left;
          }

          .success {
            color: green;
          }

          .fail {
            color: red;
          }

          h3 {
            margin: 0.4rem 0;
          }

          p {
            margin: 0.25rem;
            font-size: 0.925rem;
          }

          @media (max-width: 1000px) {
            .card {
              width: calc(50% - 20px);
            }

            img {
              width: 25%;
            }
          }

          @media (max-width: 650px) {
            .card {
              width: calc(100% - 20px);
            }

            img {
              width: 20%;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

export default LaunchCard;

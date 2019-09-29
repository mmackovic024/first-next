import Link from 'next/link';

const LaunchCard = ({ launch }) => {
  return (
    <Link href="/launch/[id]" as={`/launch/${launch.flight_number}`}>
      <div className="card">
        <div className="card-title">
          <h3 className={launch.launch_success ? 'success' : 'fail'}>#{launch.flight_number}</h3>
        </div>
        <div className="card-content">
          <img src={launch.links.mission_patch_small} alt="patch" />
          <div className="details">
            <h3>{launch.mission_name}</h3>
            <p>{launch.launch_date_local.split('T')[0]}</p>
            <p>Launch site: {launch.launch_site.site_name}</p>
          </div>
        </div>
        <style jsx>{`
          .card {
            cursor: pointer;
            width: calc((100% / 3) - 20px);
            margin: 5px;
            padding: 0.25rem;
            background-color: rgba(20, 20, 20, 0.8);
            border: 1px solid #111;
            border-radius: 5px;
            transition: background-color 0.5s;
            animation: fadeSlideIn 0.8s;

            @keyframes fadeSlideIn {
              from {
                opacity: 0;
                transform: translateY(150px);
              }

              to {
                opacity: 100%;
                transform: translateY(0);
              }
            }
          }

          .card:hover {
            border-color: #ccc;
            background-color: rgba(20, 20, 20, 0.95);
          }

          .card-title {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #666;
          }

          .card-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
          }

          .card-content h3,
          p {
            color: #ddd;
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
            margin: 0.25rem 0;
            font-size: 0.925rem;
          }

          @media (max-width: 1000px) {
            .card {
              width: calc(50% - 20px);
            }

            img {
              width: 28%;
            }
          }

          @media (max-width: 650px) {
            .card {
              width: calc(100% - 20px);
            }

            img {
              width: 24%;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

export default LaunchCard;

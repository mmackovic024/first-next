import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LaunchContext from './LaunchContext';

const Header = () => {
  const { launches } = React.useContext(LaunchContext);
  const router = useRouter();
  const { id } = router.query;

  return (
    <header>
      <div className="navBtn">
        {+id - 1 > 0 && (
          <Link href="/launch/[id]" as={`/launch/${+id - 1}`}>
            <h1>˂ #{+id - 1}</h1>
          </Link>
        )}
      </div>
      <Link href="/">
        <h1>SpaceX launches</h1>
      </Link>
      <div className="navBtn">
        {+id + 1 <= launches.length && (
          <Link href="/launch/[id]" as={`/launch/${+id + 1}`}>
            <h1>#{+id + 1} ˃</h1>
          </Link>
        )}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 54px 0 0 0;
          background: #f4f4f4 url('/static/spacex.png') no-repeat fixed;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        :global(.container) {
          margin: 0 auto;
          max-width: 1400px;
          text-align: center;
        }

        .navBtn {
          width: 85px;
        }

        .navBtn:first-child {
          text-align: left;
        }

        .navBtn:last-child {
          text-align: right;
        }

        header {
          position: fixed;
          top: 0;
          width: 100%;
          height: 55px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #111;
          color: #ddd;
          box-shadow: 1px 1px 5px #444;
        }

        h1 {
          display: inline-block;
          cursor: pointer;
          margin: 0 auto;
          margin-block-start: 0;
          margin-block-end: 0;
          transition: text-shadow 0.3s;
        }

        h1:hover {
          color: #fff;
          text-shadow: 2px 2px 4px #ccc;
        }

        @media (max-width: 500px) {
          .navBtn {
            width: 50px;
          }

          header {
            height: auto;
          }

          h1 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

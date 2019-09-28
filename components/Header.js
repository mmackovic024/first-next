import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <h1>SpaceX launches - Next.js</h1>
    </Link>

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

      header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 55px;
        text-align: center;
        background-color: #111;
        box-shadow: 1px 1px 5px #444;
      }

      h1 {
        display: inline-block;
        cursor: pointer;
        margin: 0.5rem;
        color: #ddd;
      }

      h1:hover {
        color: #fff;
        text-shadow: 2px 2px 4px #ccc;
      }

      @media (max-width: 500px) {
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

export default Header;

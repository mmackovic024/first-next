import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <h1>SpaceX launches - Next.js</h1>
    </Link>
    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 100%;
        text-align: center;
        background-color: #ddd;
        border-bottom: 1px solid #bbb;
        box-shadow: 1px 1px 5px grey;
      }

      h1 {
        cursor: pointer;
        margin-block-start: 0;
        margin-block-end: 0;
        padding: 0.5rem 0;
        color: #333;
      }

      h1:hover {
        color: #000;
        text-shadow: 2px 2px 4px #aaa;
      }
    `}</style>
  </header>
);

export default Header;

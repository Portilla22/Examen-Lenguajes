"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className="rowheader w-full py-0"
      style={{
        backgroundColor: "#800020",
        position: "absolute",
        top: 0,
        width: "100%",
        height: "150px",
      }}
    >
      <nav
        style={{
          backgroundColor: "gray",
          padding: "10px",
          textAlign: "right",
        }}
      >
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px", color: "white" }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px", color: "white" }}>
            <Link href="/about">About</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px", color: "white" }}>
            <Link href="/github">Proyectos</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px", color: "white" }}>
          <a href="mailto:josuealpizar2290@gmail.com">Call to action</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center">
        <img src="logo.png" alt="" className="w-24 h-24 mr-3" />
      </div>
    </header>
  );
};

export default Header;
import { Link } from 'react-router-dom';
import React from 'react';
import './../App.css';

export default function Header() {
  return (
    <div className='Header-main'>
      <div className="heads">
        <h1>Cozy Coffee Shop</h1>
        <p>Where warmth meet flavour</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  );
}

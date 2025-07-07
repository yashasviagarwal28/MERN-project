import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
      <Link to="/contact-details">Contact Details</Link>
    </nav>
  );
}

export default Navbar;
// Navbar.js

import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">User Cards App</div>
      <button className="btn" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;

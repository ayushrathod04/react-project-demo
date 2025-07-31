import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('loggedInUser'));
  } catch (e) {
    localStorage.removeItem('loggedInUser');
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <span>Welcome, {user.firstName}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;

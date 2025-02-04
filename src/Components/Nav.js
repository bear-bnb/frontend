import React from 'react';
import Logo from './Logo';  // Import the Logo component
import UserNav from './userNav';  // Import the UserNav component
import './Nav.css';  // Import the CSS file for styles

// Define the Nav component
export default function Nav() {
  return (
    <div className="nav-container">
      {/* Render the Logo component */}
      <Logo />
      {/* Render the UserNav component */}
      <UserNav />
    </div>
  );
}

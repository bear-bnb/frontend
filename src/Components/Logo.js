import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">  {/* Link to the homepage ("/") */}
        <img src="/images/BearBnB.svg" alt="BearBnB Logo" />
      </Link>
    </div>
  );
}


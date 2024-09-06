// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <a href="/">Home</a>
        </div>
        <div className="text-white">
          <ul className="flex space-x-4">
            <li><a href="/submissions" className="nav-link">Submissions</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
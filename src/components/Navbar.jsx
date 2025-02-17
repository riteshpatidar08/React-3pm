import React from 'react';
import { Link , NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="h-16 bg-[#282828] text-white">
        <div>
          <h1>Netflix</h1>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
               
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

//programmtic navigation



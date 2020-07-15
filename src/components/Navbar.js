import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo darken-3">
        <div className="container">
        <a className="brand-logo">N-HS Arts Club</a>
          <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/browseart'>Browse Art</NavLink></li>
            <li><NavLink to='/submitart'>Join</NavLink></li>
            <li><NavLink to='/suggestions'>Suggestions</NavLink></li>
          </ul>
        </div>
      </nav> 
    )
}

export default Navbar
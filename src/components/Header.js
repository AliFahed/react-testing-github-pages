import React from 'react';
import reactIcon from '../images/react-icon.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={reactIcon} alt="react-icon" className="react-icon" />
          <h1 className="react-facts-title">ReactFacts</h1>
        </div>
        <ul className="ul">
          <li className="nav-items">React Course - Project 1</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

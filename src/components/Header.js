import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">nexus</span>
          </div>
        </div>
        
        <div className="header-center">
          <span className="time">1:24 PM GMT+5:30</span>
        </div>
        
        <div className="header-right">
          <button className="explore-btn">
            Explore Events ↗
          </button>
          <button className="sign-in-btn">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
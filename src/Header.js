import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo1">Dashboard</div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="searchinputdesign"
        />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = (props) => {
  const { logoUrl, title } = props;

  return (
    <header className="header">
      <div className="logo-search-container">
        <div className="logo">
          <img src={logoUrl} alt="Logo" />
          <h1>{title}</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search..." />
          <button>search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

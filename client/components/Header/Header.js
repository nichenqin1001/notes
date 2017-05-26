import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__brand">{props.title}</Link>
        <button onClick={() => Accounts.logout()} className="button button__link">登出</button>
      </div>
    </div>
  );
};

export default Header;

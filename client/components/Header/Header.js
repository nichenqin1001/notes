import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/notes" className="header__brand">{props.title}</Link>
        <Link to="/public" className="header__brand">首页</Link>
        <button onClick={() => Accounts.logout()} className="button button__link-text">登出</button>
      </div>
    </div>
  );
};

export default Header;

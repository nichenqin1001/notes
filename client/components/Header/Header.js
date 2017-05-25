import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__brand">{props.title}</div>
        <button onClick={() => Accounts.logout()} className="button button__link">登出</button>
      </div>
    </div>
  );
};

export default Header;

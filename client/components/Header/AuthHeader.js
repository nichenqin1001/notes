import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/public" className="header__brand">不知笔记</Link>
      </div>
    </div>
  );
};

export default AuthHeader;
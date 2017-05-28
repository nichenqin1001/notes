import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  renderAuthButtons() {
    const { history, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return (
        <div className="ml-auto">
          <button onClick={() => history.replace('/notes')} className="button button__link-text">我的</button>
          <button onClick={() => Accounts.logout()} className="button button__link-text">登出</button>
        </div>
      );
    } else {
      return (
        <div className="ml-auto">
          <input className="header__form" type="email" />
          <button onClick={() => history.replace('/signin')} className=" button button__link-text">登录</button>
          <button onClick={() => history.replace('/signup')} className="button button__link-text">注册</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <Link to="/public" className="header__brand">{this.props.title}</Link>
          {this.renderAuthButtons()}
        </div>
      </div>
    );
  }
};

Header = createContainer(() => {
  const isAuthenticated = Meteor.userId();
  return { isAuthenticated };
}, Header);

Header = withRouter(Header);

export default Header;

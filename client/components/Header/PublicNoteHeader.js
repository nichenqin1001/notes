import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

class PublicNoteHeader extends Component {
  renderAuthButtons() {
    const { history } = this.props;

    if (this.props.isAuthenticated) {
      return (
        <div>
          <button onClick={() => history.replace('/notes')} className="button button__link-text">我的</button>
          <button onClick={() => Accounts.logout()} className="button button__link-text">登出</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => history.replace('/signin')} className="button button__link-text">登录</button>
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

PublicNoteHeader = createContainer(() => {
  const isAuthenticated = Meteor.userId();
  return { isAuthenticated };
}, PublicNoteHeader);

PublicNoteHeader = withRouter(PublicNoteHeader);

export default PublicNoteHeader;

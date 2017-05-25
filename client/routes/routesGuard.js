import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';

export const requireAuth = ComposedComponent => {
  class AuthGuard extends Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) this.props.history.push('/');
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) this.props.history.push('/');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  AuthGuard = createContainer(() => ({ isAuthenticated: !!Meteor.userId() }), AuthGuard);
  AuthGuard = withRouter(AuthGuard);

  return AuthGuard;
};

export const autoRedirectWithAuth = ComposedComponent => {
  class AutoRedirect extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated) this.props.history.push('/notes');
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) this.props.history.push('/notes');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  AutoRedirect = createContainer(() => ({ isAuthenticated: !!Meteor.userId() }), AutoRedirect);
  AutoRedirect = withRouter(AutoRedirect);

  return AutoRedirect;
};

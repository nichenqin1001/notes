import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';
import Dashboard from '../components/Dashboard';
import PublicNoteList from '../components/PublicNote/PublicNoteList';
// auth guards
import { requireAuth, autoRedirectWithAuth } from './routesGuard';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={PublicNoteList} />
        <Route path="/signin" component={autoRedirectWithAuth(Signin)} />
        <Route path="/signup" component={autoRedirectWithAuth(Signup)} />
        <Route path="/notes" component={requireAuth(Dashboard)} />
      </Switch>
    </div>
  </BrowserRouter>
);


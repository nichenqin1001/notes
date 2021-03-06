import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';
import Dashboard from '../components/Dashboard';
import PublicNoteMain from '../components/PublicNote/PublicNoteMain';
import NotFound from '../components/Common/NotFound';
// auth guards
import { requireAuth, autoRedirectWithAuth } from './routesGuard';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/public" component={PublicNoteMain} />
        <Route path="/signin" component={autoRedirectWithAuth(Signin)} />
        <Route path="/signup" component={autoRedirectWithAuth(Signup)} />
        <Route path="/notes" component={requireAuth(Dashboard)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);


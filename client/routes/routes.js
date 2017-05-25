import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';
import NoteList from '../components/Note/NoteList';
// auth guards
import { autoRedirectWithAuth } from './routesGuard';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={autoRedirectWithAuth(Signin)} />
        <Route path="/signup" component={autoRedirectWithAuth(Signup)} />
        <Route path="/notes" component={NoteList} />
      </Switch>
    </div>
  </BrowserRouter>
);


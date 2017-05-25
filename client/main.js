import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';

import Routes from './routes/routes';
import '../imports/collections/notes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <Routes />
    </Provider>,
    document.getElementById('app'));
});

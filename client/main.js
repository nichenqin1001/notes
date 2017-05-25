import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/routes';
import '../imports/collections/notes';

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('app'));
});

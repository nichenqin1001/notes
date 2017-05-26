import { Meteor } from 'meteor/meteor';
// collections
import { Notes } from '../imports/collections/notes';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('notes', function () {
    return Notes.find({});
  });
});

import { Mongo } from 'meteor/mongo';
import moment from 'moment';

Meteor.methods({
  'notes.insert'() {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.insert({
      title: '',
      body: '',
      ownerId: Meteor.userId(),
      createdAt: moment().valueOf()
    });
  },

  'notes.remove'(note) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.remove(note);
  }
});

export const Notes = new Mongo.Collection('notes');

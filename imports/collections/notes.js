import { Mongo } from 'meteor/mongo';
import moment from 'moment';

Meteor.methods({
  'notes.insert'() {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.insert({
      title: '',
      body: '',
      ownerId: Meteor.userId(),
      updatedAt: moment().valueOf(),
      createdAt: moment().valueOf()
    });
  },

  'notes.remove'(note) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.remove(note);
  },

  'notes.update'(note, updates) {
    if (!Meteor.userId()) throw new Meteor.Error('not authenticated');

    return Notes.update(note, { $set: { updatedAt: moment().valueOf(), ...updates } });
  }
});

export const Notes = new Mongo.Collection('notes');

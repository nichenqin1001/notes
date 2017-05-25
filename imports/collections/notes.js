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
  }
});

export const Notes = new Mongo.Collection('notes');

import { Mongo } from 'meteor/mongo';
import moment from 'moment';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
  'notes.insert'() {
    if (!this.userId) throw new Meteor.Error('not authenticated');

    return Notes.insert({
      title: '',
      body: '',
      ownerId: this.userId,
      createdAt: moment().valueOf()
    });
  }
});

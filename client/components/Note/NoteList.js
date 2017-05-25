import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';

class NoteList extends Component {
  render() {
    return (
      <div>
        NoteList
      </div>
    );
  }
}

NoteList = createContainer(() => {
  Meteor.subscribe('notes');
  const notes = Notes.find({}).fetch();
  return { notes };
}, NoteList);

export default NoteList;

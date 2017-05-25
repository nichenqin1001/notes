import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';
import NoteListItem from './NoteListItem';

class NoteList extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        <AddNote />
        <h1>笔记列表</h1>
        {notes.map(note => <NoteListItem key={note._id} note={note} />)}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

NoteList = createContainer(() => {
  Meteor.subscribe('notes');
  const notes = Notes.find().fetch();
  return { notes };
}, NoteList);

export default NoteList;

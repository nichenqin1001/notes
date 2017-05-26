import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import PublicNoteListItem from './PublicNoteListItem';
import NoteListEmptyItem from '../Note/NoteListEmptyItem';
import Loader from '../Common/Loader';

class PublicNoteList extends Component {
  render() {
    const { loading, noteExists, notes } = this.props;

    if (loading) return <Loader />;

    if (!loading && !noteExists) return <NoteListEmptyItem />;

    return (
      <div>
        {notes.map(note => <PublicNoteListItem key={note._id} note={note} />)}
      </div>
    );
  }
}

PublicNoteList = createContainer(() => {
  const notesHandle = Meteor.subscribe('notes');
  const loading = !notesHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = noteExists ? Notes.find({}).fetch() : {};
  return { loading, noteExists, notes };
}, PublicNoteList);

export default PublicNoteList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// routes
import { withRouter } from 'react-router-dom';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import Loader from '../Common/Loader';

class NoteList extends Component {
  render() {
    const { loading, notes, noteExists } = this.props;

    if (loading) return <Loader />;

    if (!noteExists && !loading) return (
      <div>
        <AddNote />
        <NoteListEmptyItem />
      </div>
    );

    return (
      <div>
        <AddNote />
        <h1>笔记列表</h1>
        <div className="cards">
          {notes.map(note => <NoteListItem key={note._id} note={note} />)}
        </div>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  noteExists: PropTypes.bool.isRequired
};

NoteList = createContainer(() => {
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = noteExists ? Notes.find({ ownerId: Meteor.userId() }, { sort: { updatedAt: -1 } }).fetch() : [];
  return { loading, noteExists, notes };
}, NoteList);

NoteList = withRouter(NoteList);

export default NoteList;

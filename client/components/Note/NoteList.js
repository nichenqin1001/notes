import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import Loader from '../Common/Loader';

class NoteList extends Component {
  render() {
    const { loading, notes } = this.props;
    return (
      <div>
        <AddNote />
        {!notes.length && !loading && <NoteListEmptyItem />}
        {loading && <Loader />}
        {notes.length > 0 && !loading && <h1>笔记列表</h1>}
        {notes.map(note => <NoteListItem key={note._id} note={note} />)}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

NoteList = createContainer(() => {
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const notes = Notes.find().fetch();
  return { loading, notes };
}, NoteList);

export default NoteList;

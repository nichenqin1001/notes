import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import Loader from '../Common/Loader';
import NoteDetail from './NoteDetail';

class NoteList extends Component {
  render() {
    const { loading, notes, noteExists, match } = this.props;
    return (
      <div>
        <AddNote />
        {!noteExists && !loading && <NoteListEmptyItem />}
        {loading && <Loader />}
        {noteExists && !loading && <h1>笔记列表</h1>}
        {notes.map(note => <NoteListItem key={note._id} note={note} />)}
        <Route path={`${match.path}/:id`} component={NoteDetail} />
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
  const notes = noteExists ? Notes.find().fetch() : [];
  return { loading, noteExists, notes };
}, NoteList);

NoteList = withRouter(NoteList);

export default NoteList;

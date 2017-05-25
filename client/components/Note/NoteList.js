import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// routes
import { Route, withRouter } from 'react-router-dom';
import { requireAuth } from '../../routes/routesGuard';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import Loader from '../Common/Loader';
import NoteDetail from './NoteDetail';
import NoteEditor from './NoteEditor';

class NoteList extends Component {
  render() {
    const { loading, notes, noteExists, match } = this.props;

    if (loading) return <Loader />;

    if (!noteExists && !loading) return <NoteListEmptyItem />;

    return (
      <div>
        <AddNote />
        <h1>笔记列表</h1>
        {notes.map(note => <NoteListItem key={note._id} note={note} />)}
        <Route exact path={`${match.path}/:id`} component={requireAuth(NoteDetail)} />
        <Route exact path={`${match.path}/:id/edit`} component={requireAuth(NoteEditor)} />
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

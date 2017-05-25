import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import Loader from '../Common/Loader';

class NoteEditor extends Component {
  render() {
    const { loading, noteExists, note } = this.props;

    if (loading) return <Loader />;

    if (!noteExists) return <div>没有找到笔记</div>;

    return (
      <div>
        {note.createdAt}
      </div>
    );
  }
}

NoteEditor.propTypes = {
  note: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  noteExists: PropTypes.bool.isRequired
};

NoteEditor = createContainer((props) => {
  const noteHanle = Meteor.subscribe('notes');
  const loading = !noteHanle.ready();
  const note = Notes.findOne({ _id: props.match.params.id });
  const noteExists = !loading && !!note;
  return { note, loading, noteExists };
}, NoteEditor);

export default NoteEditor;

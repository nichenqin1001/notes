import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import NoteEditor from './NoteEditor';
import Loader from '../Common/Loader';

class NoteDetail extends Component {
  render() {
    const { note, history, noteExists } = this.props;

    if (!noteExists) return <Loader />;

    return (
      <div>
        <button onClick={() => history.goBack()} className="button">返回</button>
        <p>{note.title || '没有标题'}</p>
        <NoteEditor note={note} />
      </div>
    );
  }
}

NoteDetail.propTypes = {
  note: PropTypes.object
};

NoteDetail = createContainer((props) => {
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id: props.match.params.id });
  const noteExists = !loading && !!note;
  return { loading, note, noteExists };
}, NoteDetail);

export default NoteDetail;

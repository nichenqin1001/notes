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
    const { note, loading, history, noteExists } = this.props;

    if (loading) return <Loader />;

    if (!loading && !noteExists) return <button onClick={() => history.goBack()} className="button">返回</button>;

    return (
      <div className="grid">
        <div className="section">
          <button onClick={() => history.goBack()} className="button">返回</button>
          <p className="section__header">{note.title || '没有标题'}</p>
          <p>{note.body || '没有内容'}</p>
        </div>
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

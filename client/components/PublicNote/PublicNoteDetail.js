import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import Loader from '../Common/Loader';

class PublicNoteDetail extends Component {
  render() {
    const { note, history, loading, noteExists } = this.props;

    if (loading) return <Loader />;

    if (!loading && !noteExists) return <button onClick={history.goBack()} className="button">返回</button>;

    return (
      <div>
        <button onClick={() => history.goBack()} className="button">返回</button>
        <p>{note.title || '没有标题'}</p>
        <p>{note.body || '没有内容'}</p>
      </div>
    );
  }
}

PublicNoteDetail.propTypes = {
  note: PropTypes.object
};

PublicNoteDetail = createContainer((props) => {
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id: props.match.params.id });
  const noteExists = !loading && !!note;
  return { loading, note, noteExists };
}, PublicNoteDetail);

export default PublicNoteDetail;

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';

class NoteDetail extends Component {
  render() {
    return (
      <div>
        Note Detail
      </div>
    );
  }
}

NoteDetail = createContainer((props) => {
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id: props.match.params.id });
  const noteExists = !loading && !!note;
  return { loading, note, noteExists };
}, NoteDetail);

export default NoteDetail;

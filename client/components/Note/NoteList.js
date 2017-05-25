import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import AddNote from './AddNote';

class NoteList extends Component {
  render() {
    return (
      <div>
        <AddNote />
        {this.props.notes.length}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

NoteList = createContainer(() => {
  Meteor.subscribe('notes');
  const notes = Notes.find({}).fetch();
  return { notes };
}, NoteList);

export default NoteList;

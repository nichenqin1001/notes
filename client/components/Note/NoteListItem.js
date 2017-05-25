import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const NoteListItem = (props) => {
  return (
    <div>
      <h5>{props.note.title || 'Untitled Note'}</h5>
      <p>{moment(props.note.createAt).format('YYYY-MM-DD')}</p>
      <button onClick={() => Meteor.call('notes.remove', props.note)}>删除笔记</button>
    </div>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteListItem;

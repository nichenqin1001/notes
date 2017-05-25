import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

class NoteListItem extends Component {
  render() {
    const { note, match } = this.props;
    return (
      <div>
        <Link to={`${match.path}/${note._id}`}>
          <h3>{note.title || '未命名笔记'}</h3>
          <p>{moment(note.createAt).format('YYYY-MM-DD')}</p>
          <button onClick={() => Meteor.call('notes.remove', note)}>删除笔记</button>
        </Link>
      </div>
    );
  }
}

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;

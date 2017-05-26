import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

class PublicNoteListItem extends Component {
  render() {
    const { note, match } = this.props;
    return (
      <Link to={`${match.path}/${note._id}`}>
        <h3>{note.title || '未命名笔记'}</h3>
        <p>{moment(note.createAt).format('YYYY-MM-DD')}</p>
        <p>{note.body || '没有内容'} </p>
      </Link>
    );
  }
}

PublicNoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

PublicNoteListItem = withRouter(PublicNoteListItem);

export default PublicNoteListItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

class NoteListItem extends Component {
  render() {
    const { note, match } = this.props;
    return (
      <div>
        <h3>{note.title || '未命名笔记'}</h3>
        <p>{moment(note.createAt).format('YYYY-MM-DD')}</p>
        <p>{note.body || '没有内容'} </p>
        <Link className="button" to={`${match.path}/${note._id}`}>查看详情</Link>
        <Link className="button" to={`${match.path}/${note._id}/edit`}>编辑笔记</Link>
        <button onClick={() => Meteor.call('notes.remove', note)}>删除笔记</button>
      </div>
    );
  }
}

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;

import React, { Component } from 'react';
// components
import PublicNoteHeader from '../Header/PublicNoteHeader';

class PublicNoteList extends Component {
  render() {
    return (
      <div>
        <PublicNoteHeader title="所有笔记" />
      </div>
    );
  }
}

export default PublicNoteList;

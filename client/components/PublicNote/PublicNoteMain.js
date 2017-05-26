import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// components
import PublicNoteHeader from '../Header/PublicNoteHeader';
import PublicNoteList from './PublicNoteList';
import PublicNoteDetail from './PublicNoteDetail';

class PublicNoteMain extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <PublicNoteHeader title="所有笔记" />
        <div className="page">
          <Route exact path={`${match.path}`} component={PublicNoteList} />
          <Route exact path={`${match.path}/:id`} component={PublicNoteDetail} />
        </div>
      </div>
    );
  }
}

export default PublicNoteMain;

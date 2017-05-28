import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// components
import Header from '../Header/Header';
import PublicNoteList from './PublicNoteList';
import PublicNoteDetail from './PublicNoteDetail';

class PublicNoteMain extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Header title="不知笔记" />
        <div className="page">
          <Route exact path={`${match.path}`} component={PublicNoteList} />
          <Route exact path={`${match.path}/:id`} component={PublicNoteDetail} />
        </div>
      </div>
    );
  }
}

export default PublicNoteMain;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// components
import Header from './Header/Header';
import NoteList from './Note/NoteList';
import NoteDetail from './Note/NoteDetail';

class Dashboard extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Header title="我的笔记" />
        <div className="page">
          <Route exact path={`${match.path}`} component={NoteList} />
          <Route exact path={`${match.path}/:id`} component={NoteDetail} />
        </div>
      </div>
    );
  }
}

export default Dashboard;

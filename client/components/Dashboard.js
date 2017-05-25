import React, { Component } from 'react';
// components
import Header from './Header/Header';
import NoteList from './Note/NoteList';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header title="Dash Board" />
        <div className="page">
          <NoteList />
        </div>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';

class AddNote extends Component {
  addNote() {
    Meteor.call('notes.insert');
  }

  render() {
    return (
      <div>
        <button
          onClick={this.addNote.bind(this)}
          className="button">添加笔记</button>
      </div >
    );
  }
}

export default AddNote;

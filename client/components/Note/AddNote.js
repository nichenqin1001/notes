import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddNote extends Component {
  addNote() {
    Meteor.call('notes.insert', (err, note) => {
      this.props.history.push(`notes/${note}`);
    });
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

AddNote = withRouter(AddNote);

export default AddNote;

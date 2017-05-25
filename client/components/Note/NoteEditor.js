import React, { Component } from 'react';

class NoteEditor extends Component {
  deleteNote() {
    Meteor.call('notes.remove', this.props.note);
  }

  handleTitleEdit(e) {
    Meteor.call('notes.update', this.props.note._id, {
      title: e.target.value
    });
  }

  render() {

    return (
      <div>
        <input type="text" value={this.props.note.title} onChange={this.handleTitleEdit.bind(this)} />
        <button onClick={this.deleteNote.bind(this)}>Delete Note</button>
      </div>
    );
  }
}

export default NoteEditor;

import React, { Component } from 'react';

class NoteEditor extends Component {
  deleteNote() {
    Meteor.call('notes.remove', this.props.note);
  }

  handleBodyEdit(e) {
    Meteor.call('notes.update', this.props.note, {
      body: e.target.value
    });
  }

  handleTitleEdit(e) {
    Meteor.call('notes.update', this.props.note, {
      title: e.target.value
    });
  }

  render() {
    return (
      <div className="editor">
        <input type="text" defaultValue={this.props.note.title} onChange={this.handleTitleEdit.bind(this)} />
        <textarea defaultValue={this.props.note.body} onChange={this.handleBodyEdit.bind(this)}></textarea>
        <button onClick={this.deleteNote.bind(this)}>Delete Note</button>
      </div>
    );
  }
}

export default NoteEditor;

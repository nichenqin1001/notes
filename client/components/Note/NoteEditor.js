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
        <input className="editor__title" type="text" defaultValue={this.props.note.title} onChange={this.handleTitleEdit.bind(this)} />
        <textarea className="editor__content" defaultValue={this.props.note.body} onChange={this.handleBodyEdit.bind(this)}></textarea>
        <button className="button">提交</button>
        <button className="button button__secondary" onClick={this.deleteNote.bind(this)}>删除笔记</button>
      </div>
    );
  }
}

export default NoteEditor;

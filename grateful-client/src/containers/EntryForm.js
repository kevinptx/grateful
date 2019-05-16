import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEntryFormData } from "../actions/entryForm";
import { createEntry, updateEntry, deleteEntry } from "../actions/entries";

let EDIT_STATUS = false;

class EntryForm extends Component {
  componentDidMount() {
    if (this.props.location.state) {
      EDIT_STATUS = true;
      this.props.updateEntryFormData(
        this.props.location.state.current_entry.entry
      );
    } else {
    }
  }
  componentWillUnmount() {
    EDIT_STATUS = false;
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentEntryFormData = Object.assign({}, this.props.entryFormData, {
      [name]: value
    });
    this.props.updateEntryFormData(currentEntryFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    EDIT_STATUS
      ? this.props.updateEntry(this.props.entryFormData, this.props.history)
      : this.props.createEntry(this.props.entryFormData, this.props.history);
    EDIT_STATUS = false;
  };

  handleDelete = event => {
    event.preventDefault();
    this.props.deleteEntry(this.props.entryFormData.id, this.props.history);
  };

  render() {
    const { content, author, img_url } = this.props.entryFormData;
    return (
      <div id="EntryForm" className="EntryCard EntryForm">
        <h2>{EDIT_STATUS ? `Edit Entry Form` : "Add a New Entry!"}</h2>
        <form action="" onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="content">Content: </label>
            <input
              type="text"
              name="content"
              value={content}
              onChange={this.handleOnChange}
            />
            <br />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleOnChange}
            />
            <br />
          </div>
          <div>
            <label htmlFor="img_url">Image URL: </label>
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={this.handleOnChange}
            />
            <br />
          </div>
          <input
            type="submit"
            value={EDIT_STATUS ? "Submit Changes" : "Add Entry"}
            className="create-entry-button"
          />
        </form>
        {EDIT_STATUS ? (
          <button className="delete-link" onClick={this.handleDelete}>
            Delete this Entry
          </button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entryFormData: state.entryFormData,
    entries: state.entries
  };
};

export default connect(
  mapStateToProps,
  { updateEntryFormData, createEntry, updateEntry, deleteEntry }
)(EntryForm);

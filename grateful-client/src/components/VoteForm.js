import React, { Component } from "react";
import { connect } from "react-redux";
import { upvoteEntry, downvoteEntry } from "../actions/entries";

class VoteForm extends Component {
  handleUpvote = event => {
    event.preventDefault();
    this.props.upvoteEntry(this.props.entry_id);
  };
  handleDownvote = event => {
    event.preventDefault();
    this.props.downvoteEntry(this.props.entry_id);
  };

  render() {
    return (
      <div className="vote-form">
        <form className="upvote-form" onSubmit={this.handleUpvote}>
          <button className="vote-button upvote-button" type="submit">
            Upvote ++
          </button>
        </form>
        <form className="downvote-form" onSubmit={this.handleDownvote}>
          <button className="vote-button downvote-button" type="submit">
            Downvote --
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { upvoteEntry, downvoteEntry }
)(VoteForm);

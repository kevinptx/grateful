import React, { Component } from "react";
import { connect } from "react-redux";
import { upVoteComment, downVoteComment } from "../actions/comments";

class CommentCard extends Component {
  upVote = event => {
    event.preventDefault();
    this.props.upVoteComment(this.props.comment);
  };

  downVote = event => {
    event.preventDefault();
    this.props.downVoteComment(this.props.comment);
  };

  render() {
    return (
      <div className="CommentCard">
        <p className="comment">{this.props.comment.content}</p>
        <button className="upvote-button" onClick={this.upVote}>
          Likes {this.props.comment.upvotes}
        </button>
        <button className="downvote-button" onClick={this.downVote}>
          Dislikes {this.props.comment.downvotes}
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { upVoteComment, downVoteComment }
)(CommentCard);

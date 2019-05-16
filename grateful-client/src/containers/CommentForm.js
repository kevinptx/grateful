import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCommentFormData } from "../actions/commentForm";
import { createComment } from "../actions/comments";

class CommentForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentCommentFormData = Object.assign(
      {},
      this.props.commentFormData,
      {
        [name]: value,
        entry_id: this.props.entry_id
      }
    );
    this.props.updateCommentFormData(currentCommentFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.props.commentFormData);
  };

  render() {
    const { content } = this.props.commentFormData;
    return (
      <div>
        <p>Comment on this entry:</p>
        <form className="comment-form" onSubmit={this.handleOnSubmit}>
          <div>
            <textarea
              type="text"
              name="content"
              value={content}
              id={this.props.entry_id}
              onChange={this.handleOnChange}
            />
          </div>

          <div>
            <input
              type="submit"
              className="submit-comment-button"
              value="Submit Comment"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    commentFormData: state.commentFormData
  };
};

export default connect(
  mapStateToProps,
  { updateCommentFormData, createComment }
)(CommentForm);

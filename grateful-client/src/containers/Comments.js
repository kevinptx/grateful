import React from "react";
import { connect } from "react-redux";
import CommentCard from "../components/CommentCard";

const Comments = props => {
  if (props.comments) {
    const comments = props.comments.map(comment => (
      <CommentCard comment={comment} key={comment.id} />
    ));
    return <div>{comments}</div>;
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    entry: state.entry,
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);

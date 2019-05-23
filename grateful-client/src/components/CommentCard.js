import React, { Component } from "react";
import { connect } from "react-redux";
import { upVoteComment, downVoteComment } from "../actions/comments";
import styled from 'styled-components';

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
      <StyledDiv className="CommentCard">
        <StyledP className="comment">{this.props.comment.content}</StyledP>
        <StyledButton className="upvote-button" onClick={this.upVote}>
          Likes {this.props.comment.upvotes}
        </StyledButton>
        <StyledButton primary className="downvote-button" onClick={this.downVote}>
          Dislikes {this.props.comment.downvotes}
        </StyledButton>
      </StyledDiv>
    );
  }
}

export default connect(
  null,
  { upVoteComment, downVoteComment }
)(CommentCard);

const StyledButton = styled.button`
background-color: ${props => props.primary ? "red" : "darkblue"};
  padding: 5px;
  margin: 5px;
  color: white;
`;

const StyledP = styled.p`
  padding-top: 5px;
  margin: 5px;
  color: darkviolet
`;

const StyledDiv = styled.div`
  padding: 5px;
  margin: 5px;
  border: 1px dotted blue;
`;

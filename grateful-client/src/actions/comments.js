const API_URL = "http://localhost:3001/api";

// ACTION CREATORS

export const addComment = comment => {
  return {
    type: "CREATE_COMMENT_SUCCESS",
    comment
  };
};

export const setComments = comments => {
  return {
    type: "SET_COMMENTS_SUCCESS",
    comments
  };
};

export const upVoteCommentSuccess = comment => {
  return {
    type: "UPVOTE_COMMENT_SUCCESS",
    comment
  };
};

export const downVoteCommentSuccess = comment => {
  return {
    type: "DOWNVOTE_COMMENT_SUCCESS",
    comment
  };
};

// ASYNC ACTIONS

export const upVoteComment = comment => {
  return dispatch => {
    return fetch(
      `${API_URL}/entries/${comment.entry_id}/comments/${comment.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ upvotes: 1 })
      }
    )
      .then(response => response.json())
      .then(comment => {
        if (comment.error) {
          alert(comment.error);
        } else dispatch(upVoteCommentSuccess(comment));
      })
      .catch(error => alert(error));
  };
};

export const downVoteComment = comment => {
  return dispatch => {
    return fetch(
      `${API_URL}/entries/${comment.entry_id}/comments/${comment.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ downvotes: 1 })
      }
    )
      .then(response => response.json())
      .then(comment => {
        if (comment.error) {
          alert(comment.error);
        } else dispatch(downVoteCommentSuccess(comment));
      })
      .catch(error => alert(error));
  };
};

export const createComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${comment.entry_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(comment => {
        if (comment.error) {
          alert(comment.error);
        } else {
          dispatch(addComment(comment));
        }
      })
      .catch(error => alert(error));
  };
};

export const getComments = entry_id => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry_id}/comments`)
      .then(response => response.json())
      .then(comments => {
        if (comments.error) {
        } else {
          dispatch(setComments(comments));
        }
      })
      .catch(error => console.log(error));
  };
};

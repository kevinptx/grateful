export default (state = [], action) => {
  let comment;
  let index;
  switch (action.type) {
    case "SET_COMMENTS_SUCCESS":
      return action.comments;
    case "CREATE_COMMENT_SUCCESS":
      return state.concat(action.comment);
    case "ADD_COMMENT_SUCCESS":
      return state.concat(action.comment);
    case "UPVOTE_COMMENT_SUCCESS":
      index = state.findIndex(comment => comment.id === action.comment.id);
      comment = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, comment, { upvotes: (comment.upvotes += 1) }),
        ...state.slice(index + 1)
      ];
    case "DOWNVOTE_COMMENT_SUCCESS":
      index = state.findIndex(comment => comment.id === action.comment.id);
      comment = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, comment, { downvotes: (comment.downvotes += 1) }),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
};

//ACTION CREATORS

export const updateCommentFormData = commentFormData => {
  return {
    type: "UPDATED_COMMENT_DATA",
    commentFormData
  };
};

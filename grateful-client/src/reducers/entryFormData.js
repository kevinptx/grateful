const initialState = {
  content: "",
  author: "",
  image_url: "",
  upvotes: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_ENTRY_DATA":
      return action.entryFormData;
    default:
      return initialState;
  }
};

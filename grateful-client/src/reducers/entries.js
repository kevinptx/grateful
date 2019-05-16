export default (state = [], action) => {
  let index;
  let entry;
  switch (action.type) {
    case "GET_ENTRIES_SUCCESS":
      return action.entries;
    case "CREATE_ENTRY_SUCCESS":
      return state.concat(action.entry);
    case "UPVOTE_ENTRY":
      index = state.findIndex(entry => entry.id === action.entry_id);
      entry = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, entry, { upvotes: (entry.upvotes += 1) }),
        ...state.slice(index + 1)
      ];
    case "DOWNVOTE_ENTRY":
      index = state.findIndex(entry => entry.id === action.entry_id);
      entry = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, entry, { upvotes: (entry.upvotes -= 1) }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

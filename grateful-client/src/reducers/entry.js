export default (state = {}, action) => {
  switch (action.type) {
    case "GET_ENTRY_SUCCESS":
      return action.entry;
    default:
      return state;
  }
};

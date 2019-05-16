import { combineReducers } from "redux";
import entries from "./entries";
import entryFormData from "./entryFormData";
import commentFormData from "./commentFormData";
import entry from "./entry";
import comments from "./comments";

const rootReducer = combineReducers({
  entries,
  entryFormData,
  entry,
  commentFormData,
  comments
});

export default rootReducer;

import { getComments } from "./comments";
const API_URL = "http://localhost:3001/api";

// ACTION CREATORS

export const setEntries = entries => {
  return {
    type: "GET_ENTRIES_SUCCESS",
    entries
  };
};

export const setEntry = entry => {
  return {
    type: "GET_ENTRY_SUCCESS",
    entry
  };
};

export const addEntry = entry => {
  return {
    type: "CREATE_ENTRY_SUCCESS",
    entry
  };
};

export const upvoteEntryClientSide = entry_id => {
  return {
    type: "UPVOTE_ENTRY",
    entry_id: entry_id
  };
};

export const downvoteEntryClientSide = entry_id => {
  return {
    type: "DOWNVOTE_ENTRY",
    entry_id: entry_id
  };
};

// ASYNC ACTIONS

export const getEntries = () => {
  return dispatch => {
    return fetch(`${API_URL}/entries`)
      .then(response => response.json())
      .then(entries => dispatch(setEntries(entries)))
      .catch(error => console.log(error));
  };
};

export const createEntry = (entry, history) => {
  return dispatch => {
    return fetch(`${API_URL}/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ entry: entry })
    })
      .then(response => response.json())
      .then(entry => {
        if (entry.error) {
          alert(entry.error);
        } else {
          history.push(`/entries/${entry.id}`);
          dispatch(addEntry(entry));
        }
      })
      .catch(error => alert(error));
  };
};

export const updateEntry = (entry, history) => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ entry: entry })
    })
      .then(response => response.json())
      .then(entry => {
        if (entry.error) {
          alert(entry.error);
        } else {
          history.push(`/entries/${entry.id}`);
          dispatch(setEntry(entry));
        }
      })
      .catch(error => alert(error));
  };
};

export const deleteEntry = (entry_id, history) => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp);
        history.push(`/entries/`);
      })
      .catch(error => alert(error));
  };
};

export const upvoteEntry = entry_id => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ entry: { upvotes: 1 } })
    })
      .then(response => response.json())
      .then(entry => {
        if (entry.error) {
          alert(entry.error);
        } else {
          dispatch(upvoteEntryClientSide(entry.id));
        }
      })
      .catch(error => alert(error));
  };
};

export const downvoteEntry = entry_id => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ entry: { upvotes: -1 } })
    })
      .then(response => response.json())
      .then(entry => {
        if (entry.error) {
          alert(entry.error);
        } else {
          dispatch(downvoteEntryClientSide(entry.id));
        }
      })
      .catch(error => alert(error));
  };
};

export const getEntry = entry_id => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry_id}`)
      .then(response => response.json())
      .then(entry => {
        dispatch(getComments(entry.id));
        return dispatch(setEntry(entry));
      })
      .catch(error => console.log(error));
  };
};

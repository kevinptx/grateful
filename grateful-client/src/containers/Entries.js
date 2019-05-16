import React, { Component } from "react";
import { connect } from "react-redux";
import { getEntries } from "../actions/entries";
//import "../css/Entries.css";
import EntryCard from "../components/EntryCard";

//Get entries from backend API - will need a fetch.
// we'll write the fetch in getEntries (the action)
//the action is going into the backend and getting the list of entries.

class Entries extends Component {
  componentDidMount() {
    this.props.getEntries();
  }
  render() {
    return (
      <div>
        {this.props.entries.map((entry, index) => (
          <EntryCard entry={entry} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

export default connect(
  mapStateToProps,
  { getEntries }
)(Entries);

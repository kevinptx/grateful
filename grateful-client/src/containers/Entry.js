import React, { Component } from "react";
import { connect } from "react-redux";
import { getEntry } from "../actions/entries";
import EntryShow from "../components/EntryShow";

class Entry extends Component {
  constructor(props) {
    super();
    this.entry_id = props.match.params.id;
  }
  componentDidMount() {
    this.props.getEntry(this.entry_id);
  }
  render() {
    return <div>{<EntryShow entry={this.props.entry} />}</div>;
  }
}

const mapStateToProps = state => {
  return {
    entry: state.entry
  };
};

export default connect(
  mapStateToProps,
  { getEntry }
)(Entry);

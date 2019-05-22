import React, { Component } from "react";
import { connect } from "react-redux";
import { getEntries } from "../actions/entries";
import EntryCard from "../components/EntryCard";
import styled from 'styled-components';


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


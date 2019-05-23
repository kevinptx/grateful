import React, { Component } from 'react';
import styled from 'styled-components';

class VoteForm extends Component {

    state = {
      upvotes: 0,
      downvotes: 0
    }

  increment = () => {
    this.setState({
      upvotes: this.state.upvotes + 1
    })
  }

  decrement = () => {
    this.setState({
      downvotes: this.state.downvotes - 1
    })
  }

  render() {
    const { upvotes, downvotes } = this.state

    return (
      <>
        <Button color="upvote" onClick={this.increment}>Upvote: {upvotes}</Button>
        <Button primary color="downvote" onClick={this.decrement}>Downvote: {downvotes}</Button>
        <Div>Rating: {upvotes + downvotes}</Div>
      </>
    )
  }
}

export default VoteForm


const Button = styled.button`
  background-color: ${props => props.primary ? "red" : "darkblue"};
  padding: 5px;
  margin: 5px;
  color: white;
`;

const Div = styled.div`
  max-width: 5em;
  margin: 5px;
  padding: 5px 5px;
  color: white;
  background-color: darkblue;
`;
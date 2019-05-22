import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class VoteForm extends Component {

  constructor() {
    super();
    this.state = {
      upvotes: 0,
      downvotes: 0
    }
  }


  increment = () => {
    const newUpvoteCount = this.state.upvotes + 1
    this.setState({
      upvotes: newUpvoteCount
    })
  }

  decrement = () => {
    const newDownVoteCount = this.state.downvotes - 1
    this.setState({
      downvotes: newDownVoteCount
    })
  }

  render() {
    const { upvotes, downvotes } = this.state

    return (
      <>
        <Button onClick={this.increment}>Upvote: {this.state.upvotes}</Button>
        <Button onClick={this.decrement}>Downvote: {this.state.downvotes}</Button>
        <div>Rating: {upvotes + downvotes}</div>
      </>
    )
  }
}


export default VoteForm
import React from  'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

import requireAuth from 'components/requireAuth';

class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  submitHandler = (ev) => {
    ev.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  }

  changeHandler = (event) => {
    this.setState({ comment: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.changeHandler} value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(requireAuth(CommentBox));

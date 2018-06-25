import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {
  renderButton() {
    const { auth, changeAuth } = this.props;
    const label = auth ? 'Sign Out' : 'Sign In';

    return <button onClick={() => changeAuth(!auth)}>{label}</button>;
  }

  renderHeader() {
    const button = this.renderButton();

    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post a comment</Link></li>
        <li>{button}</li>
      </ul>
    );
  }

  render(){
    const header = this.renderHeader();

    return (
      <div>
        {header}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);

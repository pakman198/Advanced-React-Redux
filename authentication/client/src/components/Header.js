import './HeaderStyle.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderLinks(){
    const { authenticated } = this.props;

    if(authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  render() {
    const links = this.renderLinks();

    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        { links }
      </div>
    )
  }
}
function mapstateToProps(state){
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapstateToProps)(Header);

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends React.Component {

  onSubmit = formProps => {
    this.props.signup(formProps);
  }

  render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Signup);

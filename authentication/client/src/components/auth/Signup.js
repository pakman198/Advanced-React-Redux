import React from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends React.Component {

  onSubmit = (formProps) => {
    console.log(formProps);
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

export default reduxForm({ form: 'signup' })(Signup);

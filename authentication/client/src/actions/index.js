import axios from 'axios';

import AUTH_USER from './types';

// export const signup = ({ email, password }) => {
//   return (dispatch) => {
//
//   }
// }

export const signup = (formProps) => dispatch => {
  axios.post('http://localhost:3090/signup', formProps);
}

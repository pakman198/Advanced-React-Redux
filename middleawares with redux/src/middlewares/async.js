export default ({ dispatch }) =>
  next =>
    action => {
      // check if action has a promise on its payload property
      // if it does, then wait for it to resolve
      // if it doesn't, then send the action on to the next middleware

      // debugger;

      if (!action.payload || !action.payload.then) {
        return next(action);
      }

      // wait for promise to resolve and create an action with the promise
      // data and dispatch it

      action.payload.then(response => {
        const newAction = { ...action, payload: response };

        dispatch(newAction);
      })
    }

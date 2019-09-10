import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logging = () => next => action => {
  console.log(action.type);
  return next(action);
};

export default applyMiddleware(thunk, logging);

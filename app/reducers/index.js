import { combineReducers } from 'redux';

import availability from './availability';
import user from './user';

const rootReducer = combineReducers({
  availability,
  user,
});

export default rootReducer;

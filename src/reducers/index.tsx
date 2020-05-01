import { combineReducers } from 'redux';

import user from './user';
import navigator from './navigator';

export const reducers = combineReducers({
  user,
  navigator,
});

export type ReducersType = ReturnType<typeof reducers>;

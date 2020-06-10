import { combineReducers } from 'redux';

import user from './user';

export const reducers = combineReducers({
  user,
});

export type ReducersType = ReturnType<typeof reducers>;

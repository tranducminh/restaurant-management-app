import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const { signInSuccess } = actions;

const initialState = {
  token: '456',
};

const reducer = createReducer(initialState, {
  [signInSuccess.type]: (state, action) => {
    state.token = action.payload.token;
  },
});

export default reducer;

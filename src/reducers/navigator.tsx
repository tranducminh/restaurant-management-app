import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const { setNavigator } = actions;

const initialState = {
  navigator: 'StartScreen',
};

const reducer = createReducer(initialState, {
  [setNavigator.type]: (state, action) => {
    state.navigator = action.payload;
  },
});

export default reducer;

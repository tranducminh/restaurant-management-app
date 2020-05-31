import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const { getUserInfo } = actions;

const initialState = {
  uid: '',
  position: '',
  restaurantID: '',
};

const reducer = createReducer(initialState, {
  [getUserInfo.type]: (state, action) => {
    state.uid = action.payload.uid;
    state.position = action.payload.position;
    state.restaurantID = action.payload.restaurantID;
  },
});

export default reducer;

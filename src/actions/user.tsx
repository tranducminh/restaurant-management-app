import { createAction } from '@reduxjs/toolkit';

const setUserInfo = createAction<
  { uid?: String; position: String; restaurantID: String },
  'SET_USER_INFO'
>('SET_USER_INFO');

const user = {
  setUserInfo,
};

export default user;

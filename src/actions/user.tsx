import { createAction } from '@reduxjs/toolkit';

const getUserInfo = createAction<
  { uid: String; position: String; restaurantID: String },
  'GET_USER_INFO'
>('GET_USER_INFO');

const user = {
  getUserInfo,
};

export default user;

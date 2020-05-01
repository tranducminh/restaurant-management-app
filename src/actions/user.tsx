import { createAction } from '@reduxjs/toolkit';

const signIn = createAction<{ email: String; password: String }, 'SIGN_IN'>(
  'SIGN_IN',
);
const signInSuccess = createAction<{ token: String }, 'SIGN_IN_SUCCESS'>(
  'SIGN_IN_SUCCESS',
);

const user = {
  signIn,
  signInSuccess,
};

export default user;

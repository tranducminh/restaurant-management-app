import { all, takeEvery } from 'redux-saga/effects';

import actions from '../actions';
import { signInSaga } from './user';

const { signIn } = actions;

function* watchUser() {
  yield takeEvery(signIn.type, signInSaga);
}

export default function* rootSaga() {
  yield all([watchUser()]);
}

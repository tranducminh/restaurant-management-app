import { put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../actions';

const { signInSuccess } = actions;
type signInSuccessType = ReturnType<typeof signInSuccess>;

export function* signInSaga(action: signInSuccessType) {
  try {
    // let result = yield axios.post('#', action.payload);

    // if (result.data) {
    //   yield put(signInSuccess({ token: '123' }));
    // }
    yield put(signInSuccess({ token: 'test' }));
  } catch (error) {
    console.log(error);
  }
}

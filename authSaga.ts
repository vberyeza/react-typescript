import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
} from '../types/auth';
import { BOOKS_LIST_ROUTER } from '../../utils/constants';
import { GetTokenRequestActionType } from '../actions/types';
import { authorizationAdmin } from '../api';

function* getTokenRequestSaga({ payload }: GetTokenRequestActionType): Generator {
  try {
    const { email, password } = payload;
    const result = yield call(authorizationAdmin, { email, password });
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (result && result.status === 200) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const { data } = result;
      localStorage.setItem('token', data.tokens.access);
      yield put({ type: GET_TOKEN_SUCCESS, payload: data });
      yield put(push(BOOKS_LIST_ROUTER));
    } else {
      yield put({ type: GET_TOKEN_ERROR, payload: result });
    }
  } catch (e) {
    yield put({ type: GET_TOKEN_ERROR, payload: e });
  }
}

function* watch(): Generator {
  yield takeLatest(GET_TOKEN_REQUEST, getTokenRequestSaga);
}

export default watch;

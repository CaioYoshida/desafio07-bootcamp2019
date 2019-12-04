import { call, put, all, takeLatest } from 'redux-saga/effects';

// we use call() to make an API request inside saga
// we use put() to dispacth an action
// if you have more than one listener (e.g. takeLatest and takeEvery) you can merger them with all()
// takeLatest is a action listener. It listen certain action and start some function

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

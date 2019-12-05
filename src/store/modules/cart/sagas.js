import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';

// we use call() to make an API request inside saga
// we use put() to dispacth an action
// if you have more than one listener (e.g. takeLatest and takeEvery) you can merger them with all()
// takeLatest is a action listener. It listen certain action and start some function
// we use select() to access the state from here

import api from '../../../services/api';

import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stock = stockResponse.data;

  const itemExists = yield select(state => state.cart.find(p => p.id === id));

  if (itemExists) {
    if (itemExists.amount + 1 <= stock.amount) {
      yield put(updateAmountSuccess(itemExists.id, itemExists.amount + 1));
    } else {
      alert('Stock is unvailable for this amount');
    }
  } else if (stock.amount >= 1) {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stock = stockResponse.data;

  const item = yield select(state => state.cart.find(p => p.id === id));

  if (amount <= stock.amount) {
    yield put(updateAmountSuccess(item.id, amount));
  } else {
    alert('Stock is unvailable for this amount');
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

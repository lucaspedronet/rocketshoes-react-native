import { call, put, select, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { format } from '../../../utils/formatted'
import { addToCartSuccess } from './actions'

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id))

  if(productExists) return;

  const response = yield call(api.get, `/products/${id}`)

  const product = response.data
  product.price = format(product.price)
  product.amount = 1

  yield put(addToCartSuccess(product))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart)
])

import { Alert } from 'react-native'
import { call, put, select, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import { format } from '../../../utils/formatted'
import * as RootNavigation from '../../../services/navigation/RootNavigation'
import { addToCartSuccess, updateAmountSuccess, removeToCartSuccess } from './actions'



function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id))

  const stock = yield call(api.get, `/stock/${id}`)

  const currentAmount = stock.data.amount
  const amount = productExists  ? productExists.amount + 1 : 0

  if(amount > currentAmount) {
    Alert.alert(
      'SEM ESTOQUE',
      `Quantidade máxima em estoque ${currentAmount}`,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
    return null;
  }

  if(productExists) {
    yield put(updateAmountSuccess(id, amount))
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const product = response.data
    product.priceFormatted = format(product.price)
    product.amount = 1

    yield put(addToCartSuccess(product))

    RootNavigation.navigate('Cart')
  }

}

function* updateAmount({ id, amount }) {
  if(Number(amount) <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`)

  const currentAmount = stock.data.amount

  if(amount > currentAmount) {
    Alert.alert(
      'SEM ESTOQUE',
      `As últimas unidades em estoque (${currentAmount}) já estão no carrinho, aproveite para finalizar sua compra!`
    );
    return null;
  }

  yield put(updateAmountSuccess(id, amount))

}

function* removeIsItem({ id }) {
  const productsSize = yield select(state => state.cart.length)

  yield put(removeToCartSuccess(id))

  if(productsSize === 1) {
    RootNavigation.navigate('Home')
  }
}


export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/REMOVE_RESQUEST', removeIsItem),
  takeLatest('@cart/UPDATE_AMOUNT_RESQUEST', updateAmount),
])

import { all } from 'redux-saga/effects'
import cart from './cart/saga'

export default function* rootSagas() {
  return yield all([cart])
}

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './mudules/rootReducers'
import rootSagas from './mudules/rootSagas'

const sagaMonitor = __DEV__
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })


const enhancer = __DEV__
  ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware)

const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSagas)

export default store;

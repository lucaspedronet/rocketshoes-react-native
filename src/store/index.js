import { createStore } from 'redux'
import rootReducers from './mudules/rootReducers'


const enhancer = __DEV__ ? console.tron.createEnhancer() : null

const store = createStore(rootReducers, enhancer);

export default store;

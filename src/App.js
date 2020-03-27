import 'react-native-gesture-handler';
import './config/reactotronConfig'
import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import Routes from './routes'

import store from './store'

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}

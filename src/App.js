import 'react-native-gesture-handler';
import './config/reactotronConfig'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { isMountedRef } from './services/navigation/RootNavigation'
import Routes from './routes'

import store from './store'

// import { Container } from './styles';

export default function App() {

  // verifica se o component foi montado antes de chamar a ref={navigationRef} na navegação dentro do saga.
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}

import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import { reactotronRedux } from 'reactotron-redux'
// import sagaPlugin from 'reactotron-redux-saga'


if(__DEV__) {
  const tron = Reactotron
          .setAsyncStorageHandler(AsyncStorage)
          .configure({ host: '192.168.43.8' })
          .use(reactotronRedux())
          .useReactNative()
          .connect()

  console.tron = tron;

  tron.clear()
}

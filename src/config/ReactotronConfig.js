import Reactotron from 'reactotron-react-native';
// import {reactotronRedux} from 'reactotron-redux';
// import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

// Varíavel Global do react native, que retorna TRUE quando estiver em ambiente de desenvolvimento.
if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: '192.168.0.105'})
    .useReactNative()
    // .use(reactotronRedux())
    // .use(reactotronSaga())
    .connect();

  tron.clear(); // Limpa a timeline ao dar refresh na aplicação

  console.tron = tron;
}

import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import App from './navigators/Navigator';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';

const onBeforeLift = () => {
  // take some action before the gate lifts
};

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Root;

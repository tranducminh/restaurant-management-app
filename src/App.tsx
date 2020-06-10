import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import App from './navigators/Navigator';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Root } from 'native-base';

const onBeforeLift = () => {
  // take some action before the gate lifts
};

const MainRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        <Root>
          <App />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default MainRoot;

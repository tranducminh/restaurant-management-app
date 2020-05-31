import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { reducers } from '../reducers';

//@ts-ignore
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  //@ts-ignore
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export { persistor, store };

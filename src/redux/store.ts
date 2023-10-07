/* Libraries */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

/* Local Files */
import {reducers} from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
  blacklist: [''],
};

const middlewares = [];
middlewares.push(thunk);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(config, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export {store, persistor};

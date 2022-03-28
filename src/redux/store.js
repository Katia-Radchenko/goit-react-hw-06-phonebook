import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import phonebookReduser from './phonebook/phonebook-reducer';

const phonebookPersistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(phonebookPersistConfig, phonebookReduser),
});

let middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };

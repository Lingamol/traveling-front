import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
// import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';
import { petsReducer } from './pets/petsSlice';
import { themesReducer } from './themes/themesSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // tasks: tasksReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
    pets: petsReducer,
    themes: themesReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

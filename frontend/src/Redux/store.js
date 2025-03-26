import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session'; // Use sessionStorage instead of localStorage
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';
import genReducer from './generatedSlicer.js';
import extData from './extractorSlicer.js';

// Persist configuration using sessionStorage
const persistConfig = {
  key: 'root',
  storage: storageSession, // This ensures data is cleared when the browser is closed
};

// Combine reducers and persist them
const rootReducer = combineReducers({
  generated: genReducer,
  extData: extData,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authSlice } from "./auth/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
        auth: persistReducer(persistConfig, authSlice),
        contact: contactsReducer,
        filter: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);




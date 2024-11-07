import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

store.asyncReducers = {};


export default store;

import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../components/services/api/api';
import { reducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

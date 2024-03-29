import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';
import { createAPI } from '../components/services/api/api';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

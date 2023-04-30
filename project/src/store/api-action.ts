import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { deleteToken, saveToken } from '../components/services/api/token';
import { ApiRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { Offers } from '../types/offer-type';
import { AppDispatch, State } from '../types/state';
import { UsersData } from '../types/user-data';
import { redirectToRoute } from './action';

export const fetchOffersAction = createAsyncThunk<
    Offers,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>('LOAD_OFFERS', async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get<Offers>(AppRoute.Room);
      return data;
    });

export const checkAuthAction = createAsyncThunk<
    UsersData,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
    >('CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
      const {data}: AxiosResponse<UsersData> = await api.get(ApiRoute.Login);
      return data;
    });

export const loginAction = createAsyncThunk<
      void,
      AuthData,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }>('LOGIN', async ({mail,password}, {dispatch, extra: api}) => {
        const {data} = await api.post<UsersData>(ApiRoute.Login, {mail,password});
        saveToken(data.token);
        dispatch(checkAuthAction());
        dispatch(redirectToRoute(AppRoute.Main));
      });

export const logOutAction = createAsyncThunk<
      void,
      undefined,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }>('LOGOUT', async (_arg, {dispatch, extra: api}) => {
        await api.delete(ApiRoute.LogOut);
        deleteToken();
        dispatch(redirectToRoute(AppRoute.Login));
      });

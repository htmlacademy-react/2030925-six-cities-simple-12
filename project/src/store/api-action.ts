import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { api } from '.';
import { deleteToken, saveToken } from '../components/services/api/token';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { Offers } from '../types/offer-type';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { Action, loadOffers, redirectToRoute, setAuthorizationStatus, setOffersLoadingStatus, setUserData } from './action';

export const fetchOffersAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(Action.LOAD_OFFERS, async (_arg, {dispatch, extra: api}) => {
      dispatch(setOffersLoadingStatus(true));
      const {data} = await api.get<Offers>(AppRoute.Room);
      dispatch(setOffersLoadingStatus(false));
      dispatch(loadOffers(data));
    });

export const checkAuthAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
    >('CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(ApiRoute.Login);
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(setUserData({
          id: data.id,
          name: data.name,
          mail: data.mail,
          avatar: data.avatar,
          isPro: data.isPro
          })
        );
      } catch {
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      }
    });

export const loginAction = createAsyncThunk<
      void,
      AuthData,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }>('LOGIN', async ({mail,password}, {dispatch, extra: api}) => {
        const {data} = await api.post<UserData>(ApiRoute.Login, {mail,password});
        saveToken(data.token);
        dispatch(checkAuthAction());
        dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
        dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
        dispatch(setUserData(undefined));
        dispatch(redirectToRoute(AppRoute.Login));
      });

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { deleteToken, saveToken } from '../components/services/api/token';
import { ApiRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { Offer, Offers } from '../types/offer-type';
import { Reviews } from '../types/review-type';
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

export const fetchSingleOfferAction = createAsyncThunk<
      Offer,
      string,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }
    >('LOAD_OFFER', async (id, { dispatch, extra: api }) => {
      const { data } = await api.get<Offer>(`${ApiRoute.Reviews}/${id}`);
      return data;
    });

export const fetchNearbyOffersAction = createAsyncThunk<
      Offers,
      string,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }
    >('LOAD_NEARBY_OFFERS', async (id, { dispatch, extra: api }) => {
      const { data } = await api.get<Offers>(
        `${ApiRoute.Places}/${id}/nearby`
      );
      return data.slice(0, 3);
    });

export const fetchReviewsAction = createAsyncThunk<
      Reviews,
      string,
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }
    >('LOAD_COMMENTS', async (hotelId, { dispatch, extra: api }) => {
      const { data } = await api.get<Reviews>(`${ApiRoute.Reviews}/${hotelId}`);
      return data;
    });

export const postReviewAction = createAsyncThunk<
      Reviews,
      { hotelId: number; comment: string; rating: number },
      {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
      }
    >(
      'POST_COMMENT',
      async ({ hotelId, comment, rating }, { dispatch, extra: api }) => {
        const { data } = await api.post<Reviews>(
          `${ApiRoute.Reviews}/${hotelId}`,
          {
            comment,
            rating,
          }
        );
        return data;
      }
    );

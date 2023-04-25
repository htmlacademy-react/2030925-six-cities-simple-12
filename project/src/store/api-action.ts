import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppRoute } from '../const';
import { Offers } from '../types/offer-type';
import { AppDispatch, State } from '../types/state';
import { Action, loadOffers, setOffersLoadingStatus } from './action';

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

import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer-type';

export const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
  SORT_OFFERS: 'SORT_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
};

export const selectCity = createAction(Action.SELECT_CITY, (value: string) => ({
  payload: value
}));

export const fillOffers = createAction(Action.FILL_OFFERS);

export const sortOffers = createAction(Action.SORT_OFFERS, (value: string) => ({
  payload: value
}));

export const loadOffers = createAction<Offers>(Action.LOAD_OFFERS);

export const setOffersLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);

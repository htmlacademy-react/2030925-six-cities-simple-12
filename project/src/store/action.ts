import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer-type';
import { UserData } from '../types/user-data';

export const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
  SORT_OFFERS: 'SORT_OFFERS',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  SET_USER_DATA: 'SET_USER_DATA',
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

export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTHORIZATION_STATUS);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const setUserData = createAction<Omit<UserData, 'token'> | undefined>(Action.SET_USER_DATA);

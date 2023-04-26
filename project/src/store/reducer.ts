import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, getOffersByCity, SortBy, SortToHigh, SortToLow, SortTopRated } from '../const';
import { Offers } from '../types/offer-type';
import { UserData } from '../types/user-data';
import { fillOffers, loadOffers, selectCity, setAuthorizationStatus, setOffersLoadingStatus, setUserData, sortOffers } from './action';

const DEFAULT_CITY = 'Paris';

export type InitialStateProps = {
  city: string;
  sortType: string;
  offers: Offers;
  offersByCity: Offers;
  offerIsLoadingStatus: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: Omit<UserData, 'token'> | undefined;
};

const initialState:InitialStateProps = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SortBy.Popular,
  offersByCity: getOffersByCity([],DEFAULT_CITY),
  offerIsLoadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state) => {
      state.offersByCity = getOffersByCity(state.offers, state.city);
      state.sortType = SortBy.Popular;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;

      switch(state.sortType) {
        case SortBy.LowToHigh:
          state.offersByCity = state.offersByCity.sort(SortToLow);
          break;
        case SortBy.HighToLow:
          state.offersByCity = state.offersByCity.sort(SortToHigh);
          break;
        case SortBy.TopRated:
          state.offersByCity = state.offersByCity.sort(SortTopRated);
          break;
        default:
          state.offersByCity = getOffersByCity(state.offers, state.city);
      }
    })
    .addCase(loadOffers, (state,action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state,action) => {
      state.offerIsLoadingStatus = action.payload;
    })
    .addCase(setAuthorizationStatus, (state,action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state,action) => {
      state.userData = action.payload;
    });
});

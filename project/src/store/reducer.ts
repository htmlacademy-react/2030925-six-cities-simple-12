import { createReducer } from '@reduxjs/toolkit';
import { getOffersByCity, SortBy, SortToHigh, SortToLow, SortTopRated } from '../const';
import { Offers } from '../types/offer-type';
import { fillOffers, loadOffers, selectCity, setOffersLoadingStatus, sortOffers } from './action';

const DEFAULT_CITY = 'Paris';

export type InitialStateProps = {
  city: string;
  sortType: string;
  offers: Offers;
  offersByCity: Offers;
  offerIsLoadingStatus: boolean;
};

const initialState:InitialStateProps = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: SortBy.Popular,
  offersByCity: getOffersByCity([],DEFAULT_CITY),
  offerIsLoadingStatus: false
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
    });
});

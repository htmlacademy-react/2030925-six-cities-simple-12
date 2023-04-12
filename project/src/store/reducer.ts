import { createReducer } from '@reduxjs/toolkit';
import { getOffersByCity } from '../const';
import { Offers } from '../types/offer-type';
import { offers } from '../mocks/offers';
import { fillOffers, selectCity } from './action';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as Offers
};

export const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state) => {
      state.offers = getOffersByCity(offers, state.city);
    });
});

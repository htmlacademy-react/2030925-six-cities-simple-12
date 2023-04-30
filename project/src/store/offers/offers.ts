import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SortOption } from '../../types/sort-option';
import { OffersData } from '../../types/state';
import { fetchNearbyOffersAction, fetchOffersAction, fetchSingleOfferAction } from '../api-action';

const initialState: OffersData = {
  offers: [],
  isOffersLoading: false,
  error: false,
  singleOffer: undefined,
  isSingleOfferLoading: false,
  notFoundSingleOfferError: false,
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  sortOption: {
    name: 'popular',
    type: 'rating',
    order: 'asc'
  }
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      const data = action.payload;
      state.sortOption = data;
    }
  },

  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.error = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.error = true;
      })
      .addCase(fetchSingleOfferAction.pending, (state) => {
        state.isSingleOfferLoading = true;
        state.notFoundSingleOfferError = false;
      })
      .addCase(fetchSingleOfferAction.fulfilled, (state, action) => {
        state.isSingleOfferLoading = false;
        state.singleOffer = action.payload;
      })
      .addCase(fetchSingleOfferAction.rejected, (state) => {
        state.isSingleOfferLoading = false;
        state.notFoundSingleOfferError = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoading = true;
        state.error = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.isNearbyOffersLoading = false;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
        state.error = true;
      });
  },
});

export const { clearError, setSortOption } = offersData.actions;

import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { OffersData } from "../../types/state";
import { fetchOffersAction } from "../api-action";

const initialState: OffersData = {
    offers: [],
    isOffersLoading: false,
    error: false,
};
  
  export const offersData = createSlice({
    name: NameSpace.Offers,
    initialState,
    reducers: {
      clearError: (state) => {
        state.error = false;
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
        });
    },
  });
  
  export const { clearError } = offersData.actions;
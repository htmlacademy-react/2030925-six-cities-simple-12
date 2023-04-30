import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CityData } from '../../types/state';

const initialState: CityData = {
  currentCity: 'Paris',
};

export const currentCityData = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<CityData>) => {
      state.currentCity = action.payload.currentCity;
    }
  }
});

export const { setCurrentCity } = currentCityData.actions;

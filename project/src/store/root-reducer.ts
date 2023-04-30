import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { currentCityData } from './city/city';
import { offersData } from './offers/offers';
import { reviewsData } from './reviews/reviews';
import { userData } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.City]: currentCityData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer
});

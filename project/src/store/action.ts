import { createAction } from '@reduxjs/toolkit';

export const Action = {
  SELECT_CITY: 'SELECT_CITY',
  FILL_OFFERS: 'FILL_OFFERS'
};

export const selectCity = createAction(Action.SELECT_CITY, (value: string) => ({
  payload: value
}));

export const fillOffers = createAction(Action.FILL_OFFERS);

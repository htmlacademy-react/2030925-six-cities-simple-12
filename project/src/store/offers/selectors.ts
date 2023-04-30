import { NameSpace } from '../../const';
import { Offers } from '../../types/offer-type';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].error;

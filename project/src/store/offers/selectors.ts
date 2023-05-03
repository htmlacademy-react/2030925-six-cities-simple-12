import { NameSpace } from '../../const';
import { Offers, Offer } from '../../types/offer-type';
import { FilterOptions } from '../../types/sort-option';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].error;

export const getSingleOfferErrorStatus = (state: State): boolean => state[NameSpace.Offers].notFoundSingleOfferError;

export const getFilterOptions = (state: State): FilterOptions => state[NameSpace.Offers].filterOptions;

export const getSingleOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isSingleOfferLoading;

export const getSingleOffer = (state: State): Offer | undefined => state[NameSpace.Offers].singleOffer;

export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;

export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areNearbyOffersLoading;

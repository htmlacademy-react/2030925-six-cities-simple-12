import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offer-type';
import { SortOption } from '../../types/sort-option';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].error;

export const getSingleOfferErrorStatus = (state: State): boolean => state[NameSpace.Offers].notFoundSingleOfferError;

export const getSortOption = (state: State): SortOption => state[NameSpace.Offers].sortOption;

export const getSingleOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isSingleOfferLoading;

export const getSingleOffer = (state: State): Offer | undefined => state[NameSpace.Offers].singleOffer;

export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;

export const getNearbyOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isNearbyOffersLoading;

import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Offer, Offers } from './offer-type';
import { Reviews } from './review-type';
import { SortOption } from './sort-option';
import { UsersData } from './user-data';

export type OffersData = {
    offers: Offers;
    singleOffer: Offer | undefined;
    notFoundSingleOfferError: boolean;
    isSingleOfferLoading: boolean;
    nearbyOffers: Offers;
    isNearbyOffersLoading: boolean;
    isOffersLoading: boolean;
    sortOption: SortOption;
    error: boolean;
}

export type CityData = {
    currentCity: string;
}

export type UserData = {
    userData: Omit<UsersData, 'token'> | undefined;
    authorizationStatus: AuthorizationStatus;
}

export type ReviewData = {
    reviews: Reviews;
    isReviewsLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

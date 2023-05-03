import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Offers, Offer } from './offer-type';
import { Comments } from './review-type';
import { FilterOptions } from './sort-option';
import { UserInfo } from './user-data';


export type OffersData = {
  offers: Offers;
  singleOffer: Offer | undefined;
  notFoundSingleOfferError: boolean;
  isSingleOfferLoading: boolean;
  nearbyOffers: Offers;
  areNearbyOffersLoading: boolean;
  areOffersLoading: boolean;
  filterOptions: FilterOptions;
  error: boolean;
};

export type CommentsData = {
  comments: Comments;
  areCommentsLoading: boolean;
  isCommentBeingPosted: boolean;
}

export type CurrentCityData = {
  currentCity: string;
};

export type UserData = {
  userInfo: Omit<UserInfo, 'token'> | undefined;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

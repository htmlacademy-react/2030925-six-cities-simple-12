import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Offers } from './offer-type';
import { UsersData } from './user-data';

export type OffersData = {
    offers: Offers;
    isOffersLoading: boolean;
    error: boolean;
}

export type CityData = {
    currentCity: string;
}

export type UserData = {
    userData: Omit<UsersData, 'token'> | undefined;
    authorizationStatus: AuthorizationStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

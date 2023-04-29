import { store } from '../store';
import { FilterOption } from './filter-option';
import { Offers } from './offer-type';

export type OffersData = {
    offers: Offers;
    offersIsLoadingStatus: boolean;
    filterOption: FilterOption;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

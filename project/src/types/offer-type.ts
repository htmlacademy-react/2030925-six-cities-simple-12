import { City } from './city-type';
import { User } from './user-type';

export type Offer = {
    id: number;
    title: string;
    description: string;
    isPremium: boolean;
    type: string;
    bedrooms: number;
    maxAdults: number;
    cost: number;
    goods: string[];
    images: string[];
    rating: number;
    user: User;
    city: City
};

export type Offers = Offer[]

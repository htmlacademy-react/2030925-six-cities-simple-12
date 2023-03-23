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
};

export type Offers = Offer[]

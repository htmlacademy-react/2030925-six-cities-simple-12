import { User } from './user-type';

export type Review = {
    id: number;
    user: User;
    rating: number;
    date: string;
    text: string;
};

export type Reviews = Review[]

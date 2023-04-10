import { AVATAR_URL } from '../const';
import { Offers } from '../types/offer-type';

export const offers: Offers = [
  {
    id: 1,
    title: 'Beautiful luxurious apartment at great location',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 6,
    cost: 120,
    goods: ['wi-fi', 'cable TV'],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    rating: 5,
    user: {
      id: 1,
      avatar: AVATAR_URL.Angelina,
      name: 'Winston Churchill',
      isPro: true,
    },
    city: {
      location: {
        lat: 52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 2,
    title: 'Beautiful luxurious apartment at great location',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: 'House',
    bedrooms: 3,
    maxAdults: 6,
    cost: 120,
    goods: ['wi-fi', 'cable TV'],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    rating: 5,
    user: {
      id: 2,
      avatar: AVATAR_URL.Max,
      name: 'George Washington',
      isPro: true,
    },
    city: {
      location: {
        lat: 52.3609553943508,
        lng: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 3,
    title: 'Beautiful luxurious apartment at great location',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: 'Hotel',
    bedrooms: 3,
    maxAdults: 6,
    cost: 120,
    goods: ['wi-fi', 'cable TV'],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    rating: 5,
    user: {
      id: 3,
      avatar: AVATAR_URL.Angelina,
      name: 'Brodyaga',
      isPro: true,
    },
    city: {
      location: {
        lat: 52.3909553943508,
        lng:4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    id: 4,
    title: 'Beautiful luxurious apartment at great location',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: 'Private Room',
    bedrooms: 3,
    maxAdults: 6,
    cost: 120,
    goods: ['wi-fi', 'cable TV'],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    rating: 5,
    user: {
      id: 4,
      avatar: AVATAR_URL.Max,
      name: 'Rayan Gosling',
      isPro: true,
    },
    city: {
      location: {
        lat: 52.3809553943508,
        lng: 4.939309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
];


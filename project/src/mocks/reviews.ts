import { AVATAR_URL } from '../const';
import { Reviews } from '../types/review-type';

export const reviews: Reviews = [
  {
    id: 1,
    rating: 5,
    date: 'February, 19',
    text: 'otlichnii apartamenti spasibo',
    user: {
      id: 1,
      avatar: AVATAR_URL.Max,
      name: 'Max',
      isPro: true
    }
  }, {
    id: 2,
    rating: 4,
    date: 'March, 27',
    text: 'So good',
    user: {
      id: 2,
      avatar: AVATAR_URL.Angelina,
      name: 'Angelina',
      isPro: false
    }
  }, {
    id: 3,
    rating: 5,
    date: 'April, 5',
    text: 'Max',
    user: {
      id: 3,
      avatar: AVATAR_URL.Max,
      name: 'Max',
      isPro: true
    }
  }, {
    id: 4,
    rating: 2,
    date: 'April, 11',
    text: 'Byla jsem tam, ale nezalíbilo se mi to',
    user: {
      id: 4,
      avatar: AVATAR_URL.Angelina,
      name: 'Angelina',
      isPro: false
    }
  }, {
    id: 5,
    rating: 1,
    date: 'April, 29',
    text: 'В нашем номере были клопы!',
    user: {
      id: 5,
      avatar: AVATAR_URL.Max,
      name: 'Max',
      isPro: true
    },
  },
];

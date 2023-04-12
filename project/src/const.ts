import { Offers } from './types/offer-type';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Room = '/offer/:id'
}

export enum AVATAR_URL {
    Angelina = '/img/avatar-angelina.jpg',
    Max = '/img/avatar-max.jpg'
}

export const getOffersByCity = (offers: Offers, city: string) => {
  const result = offers.filter((offer) => offer.city.name === city);
  return result;
};

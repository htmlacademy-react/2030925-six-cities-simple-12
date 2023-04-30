export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

export enum ApiRoute {
  Places = '/hotels',
  Login = '/login',
  LogOut = '/logOut',
  Reviews = '/reviews',
}

export enum AVATAR_URL {
  Angelina = '/img/avatar-angelina.jpg',
  Max = '/img/avatar-max.jpg'
}
/*
export const getOffersByCity = (offers: Offers, city: string) => {
  const result = offers.filter((offer) => offer.city.name === city);
  return result;
};
*/
export enum SortBy {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Price: top rated first'
}

export const BasicURL = 'https://12.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}


export enum NameSpace {
  Offers = 'OFFERS',
  City = 'CITY',
  User = 'USER',
  Reviews = 'REVIEWS',
}

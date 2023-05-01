import { Offers, Offer } from '../types/offer-type';
import OfferListPage from '../components/offer-list/offer-list';
import { Map } from '../components/map/map';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks';
import CitiesList from '../components/citites-list/cities-list';
import { cities } from '../const';
import Header from '../components/header/header';
import { getOffers, getSortOption } from '../store/offers/selectors';
import { getCurrentCity } from '../store/city/selectors';
import SortList from '../components/sort-list/sort-list';
import MainEmpty from '../components/main-empty/main-empty';

export default function MainPage (): JSX.Element {
  const [activeOffer,setActiveOffer] = useState<Offer | undefined>(undefined);
  const [currentOffer, setCurrentOffer] = useState<Offers>([]);
  const offers: Offers = useAppSelector(getOffers);
  const city: string = useAppSelector(getCurrentCity);
  const sortOption = useAppSelector(getSortOption);
  const getCurrentOffer = (type: 'cost' | 'rating', order: 'asc' | 'desc') => {
    const offersCity = offers.filter((offer: Offer) => offer.city.name === city)
      .sort((a, b) => {
        if (order === 'asc') {
          return a[type] - b[type];
        } else {
          return b[type] - a[type];
        }
      });
    setCurrentOffer(offersCity);
  };
  useEffect(() => {
    getCurrentOffer(sortOption.type, sortOption.order);
  }, [city, sortOption]);

  return (
    <body className="page page--gray page--main">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <Header/>
      <main className={`page__main page__main--index ${currentOffer.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities}/>
        </div>
        <div className="cities">
          {currentOffer && currentOffer.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffer.length} places to stay in {city}</b>
                <SortList/>
                <div className="cities__places-list places__list tabs__content">
                  <OfferListPage
                    offers={currentOffer}
                    onActive={(item) => setActiveOffer(item)}
                    onBlur={() => setActiveOffer(undefined)}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={currentOffer[0].city}
                    offers={currentOffer}
                    selectedPoint={activeOffer}
                  />
                </section>
              </div>
            </div>
          ) : (
            <MainEmpty/>
          )}
        </div>
      </main>
    </body>
  );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/comment-form/comment-form';
import Header from '../components/header/header';
import { Map } from '../components/map/map';
import OtherPlacesList from '../components/other-places-list/other-places-list';
import ReviewList from '../components/review-list/review-list';
import { useAppSelector } from '../hooks';
import { getOffers } from '../store/offers/selectors';
import { Offer, Offers } from '../types/offer-type';
import { Reviews } from '../types/review-type';

type RoomScreenProps = {
  reviews: Reviews;
}

export default function PropertyPage({reviews}: RoomScreenProps): JSX.Element {
  const { id } = useParams();
  const [activeOffer,setActiveOffer] = useState<Offer | undefined>(undefined);
  const [offer, setOffer] = useState<Offer>();
  const [,setNearbyPlaces] = useState<Offers>([]);
  const offers = useAppSelector(getOffers);


  const onListItemHover = (listItemName: string | undefined) => {
    setActiveOffer(offers.find((offer: Offer) => offer.title === listItemName));
  };

  useEffect(() =>{
    const currentOffer = offers.filter((offer) => offer.id === Number(id))[0];
    setOffer(currentOffer);
    const nearbyOffers = offers.filter((offer: Offer) => offer.id !== Number(id) && offer.city.name === currentOffer.city.name);
    setNearbyPlaces(nearbyOffers);
  }, [id,offers]);

  return(
    <body>
      <div className="page">
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer?.images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt={offer.title}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{offer?.isPremium}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer?.title}
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer?.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer?.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer?.bedrooms} bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer?.cost}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer?.goods.map((item) => (
                      <li className="property__inside-item" key={item}/>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer?.user.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer?.user.name}
                    </span>
                    <span className="property__user-status">
                      {offer?.user.isPro}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer?.description}
                    </p>
                    <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewList
                    reviews={reviews}
                  />
                  <CommentForm/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={offers[0].city}
                offers={offers}
                selectedPoint={activeOffer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OtherPlacesList
                offers={offers}
              />
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

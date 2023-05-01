import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/review-form/review-form';
import Header from '../components/header/header';
import { Map } from '../components/map/map';
import OtherPlacesList from '../components/other-places-list/other-places-list';
import ReviewList from '../components/review-list/review-list';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getNearbyOffers, getNearbyOffersLoadingStatus, getSingleOffer, getSingleOfferErrorStatus, getSingleOfferLoadingStatus } from '../store/offers/selectors';
import { getReviews, getReviewsLoadingStatus } from '../store/reviews/selectors';
import { getAuthorizationStatus } from '../store/user/selectors';
import LoadingPage from './loading-page';
import MainEmpty from '../components/main-empty/main-empty';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOfferAction } from '../store/api-action';
import { currentRating } from '../utils/utils';
import { AuthorizationStatus } from '../const';

export default function PropertyPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getSingleOffer);
  const reviews = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isSingleOfferLoading = useAppSelector(getSingleOfferLoadingStatus);
  const isNearbyOffersLoading = useAppSelector(getNearbyOffersLoadingStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const singleOfferError = useAppSelector(getSingleOfferErrorStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  });

  if (isSingleOfferLoading || isNearbyOffersLoading || isReviewsLoading) {
    return <LoadingPage/>;
  }

  if (singleOfferError) {
    return <MainEmpty/>;
  }

  return(
    <body>
      <div className="page">
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>
        <Header/>
        {offer && (
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.images.map((image) => (
                    <div className="property__image-wrapper" key={image}>
                      <img className="property__image" src={image} alt={offer.title}/>
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {offer.isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: currentRating(offer.rating)}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{offer.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {offer.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {offer.bedrooms} bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{offer.cost}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offer.goods.map((item) => (
                        <li className="property__inside-item" key={item}/>
                      ))}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper ${offer.user.isPro ? 'property__avatar-wrapper--pro' : '' } user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={offer.user.avatar} width="74" height="74" alt={offer.user.name}/>
                      </div>
                      <span className="property__user-name">
                        {offer.user.name}
                      </span>
                      {offer.user.isPro && (<span className="property__user-status">Pro</span>)}
                    </div>
                    <div className="property__description">
                      <p className="property__text" key={offer.description.slice(0,10)}>
                        {offer.description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot;{''}
                      <span className="reviews__amount">{reviews.length}</span>
                    </h2>
                    <ReviewList
                      reviews={reviews}
                    />
                    {authorizationStatus === AuthorizationStatus.Auth && <CommentForm offerId={offer.id}/>}
                  </section>
                </div>
              </div>
              <section className="property__map map">
                {nearbyOffers.length && (
                  <Map
                    city={offer.city}
                    offers={[...nearbyOffers, offer]}
                    selectedPoint={offer}
                  />)}
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                {nearbyOffers.length && (
                  <OtherPlacesList
                    offers={nearbyOffers}
                  />)}
              </section>
            </div>
          </main>
        )}
      </div>
    </body>
  );
}

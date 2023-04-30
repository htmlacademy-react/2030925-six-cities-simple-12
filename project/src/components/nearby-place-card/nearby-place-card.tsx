import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer-type';

type NearbyPlaceCardProps = {
    nearbyOffer: Offer;
    onListItemHover: (listItemName: string | undefined) => void;
}

export default function NearbyPlaceCard(props: NearbyPlaceCardProps): JSX.Element {
  const {nearbyOffer, onListItemHover} = props;
  const onListItemEnter = () => {
    onListItemHover(nearbyOffer.title);
  };
  const onListItemLeave = () => {
    onListItemHover(undefined);
  };
  return (
    <article className="near-places__card place-card"
      onMouseEnter={onListItemEnter}
      onMouseLeave={onListItemLeave}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Main}>
          <img
            className="place-card__image"
            src={nearbyOffer.images[0]}
            width="260"
            height="200"
            alt="Wood and stone place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{nearbyOffer.cost}</b>
            <span className="place-card__price-text">
                  &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: nearbyOffer.rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${nearbyOffer.id}`}>{nearbyOffer.title}</Link>
        </h2>
        <p className="place-card__type">{nearbyOffer.description}</p>
      </div>
    </article>
  );
}

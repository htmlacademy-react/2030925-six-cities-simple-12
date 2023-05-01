import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer-type';
import { currentRating } from '../../utils/utils';

type OfferPageProps = {
  offer: Offer;
  onListItemHover: (selectedOfferId: number | undefined) => void;
}

export default function OfferCard (props: OfferPageProps): JSX.Element {
  const {offer,onListItemHover} = props;
  const {id,title,type,rating,cost,isPremium,images} = offer;
  const pageLink = `/offer/${id}`;
  const onListItemEnter = () => {
    onListItemHover(id);
  };

  const onListItemLeave = () => {
    onListItemHover(undefined);
  };
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onListItemEnter}
      onMouseLeave={onListItemLeave}
    >
      <div className="place-card__mark">
        <span>{isPremium ? 'Premium' : ''}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={pageLink}>
          <img className="place-card__image" src= {images[0] ?? null} width="260" height="200" alt={title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: currentRating(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <Link className="place-card__name" to={`offer/${id}`}>
          {title}
        </Link>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

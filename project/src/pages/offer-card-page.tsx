import { Link } from 'react-router-dom';
import { Offer } from '../types/offer-type';

type OfferPageProps = {
  offer: Offer;
  onActive: () => void;
  onBlur: () => void;
}

export default function OfferCard (props: OfferPageProps): JSX.Element {
  const {offer} = props;
  const {title,type,rating,cost,isPremium} = offer;
  const pageLink = `/offer/${props.offer.id}`;
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{isPremium ? 'Premium' : ''}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={pageLink}>
          <img className="place-card__image" src= {props.offer.images[0] ?? null} width="260" height="200" alt={title}/>
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

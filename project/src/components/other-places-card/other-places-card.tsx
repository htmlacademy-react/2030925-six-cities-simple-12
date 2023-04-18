import { Offer } from '../../types/offer-type';
import { Link } from 'react-router-dom';

export type OtherPlacesCardProps = {
    offer: Offer;
}

export default function OtherPlacesCard(props: OtherPlacesCardProps): JSX.Element {
  const {offer} = props;
  const {id,images,cost,rating,title,type} = offer;
  const pageLink = `/offer/${id}`;
  return(
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={pageLink}>
          <img className="place-card__image" src={images[0] ?? null} width="260" height="200" alt="Place image"/>
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

import { Offer, Offers } from '../../types/offer-type';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
  onListItemHover: (selectedOfferId: number | undefined) => void;
}

export default function OfferListPage (props: OfferListProps): JSX.Element {
  const lists = props.offers.map((offer: Offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      onListItemHover={props.onListItemHover}
    />
  ));
  return (
    <div className='cities__places-list places__list tabs__content'>{lists}</div>
  );
}


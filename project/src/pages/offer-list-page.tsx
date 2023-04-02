import { Offer, Offers } from '../types/offer-type';
import OfferCard from './offer-card-page';

type OfferListProps = {
  offers: Offers;
  onActive: (item: Offer) => void;
  onBlur: () => void;

}

export default function OfferListPage (props: OfferListProps): JSX.Element {

  const lists = props.offers.map((offer: Offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      onActive={() => props.onActive(offer)}
      onBlur={() => props.onBlur()}
    />
  ));
  return (
    <div className='cities__places-list places__list tabs__content'>{lists}</div>
  );
}


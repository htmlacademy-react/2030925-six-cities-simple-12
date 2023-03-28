import { Offer, Offers } from '../types/offer-type';
import OfferCard from './offer-card-page';

export type OfferListProps = {
    offers: Offers;
    onListItemHover: (listItemName: string | undefined) => void;
}

export default function OfferListPage (props: OfferListProps): JSX.Element {
  const {offers,onListItemHover} = props;

  const lists = offers.map((offer: Offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      onListItemHover={onListItemHover}
    />
  ));
  return (<div className='cities__places-list places__list tabs__content'>{lists}</div>);
}



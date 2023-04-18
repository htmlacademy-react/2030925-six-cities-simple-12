import { Offer, Offers } from '../../types/offer-type';
import OtherPlacesCard from '../other-places-card/other-places-card';

export type OtherPlacesListProps = {
    offers: Offers;
}

export default function OtherPlacesList(props: OtherPlacesListProps): JSX.Element {
  const lists = props.offers.map((offer: Offer) => (
    <OtherPlacesCard
      key={offer.id}
      offer={offer}
    />
  ));
  return(
    <div className="near-places__list places__list">{lists}</div>
  );
}

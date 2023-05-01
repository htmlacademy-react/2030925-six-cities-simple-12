import { Offers } from '../../types/offer-type';
import NearbyPlaceCard from '../nearby-place-card/nearby-place-card';

type NearbyPlaceListProps = {
    nearbyOffers: Offers;
}

export default function NearbyPlaceList(props: NearbyPlaceListProps): JSX.Element {
  const {nearbyOffers} = props;
  return(
    <div className="near-places__list places__list">
      {nearbyOffers.map((nearbyOffer) => (
        <NearbyPlaceCard
          key={nearbyOffer.id}
          nearbyOffer={nearbyOffer}
        />
      ))}
    </div>
  );
}

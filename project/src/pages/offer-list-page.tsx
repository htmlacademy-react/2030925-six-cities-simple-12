import { useState } from 'react';
import { Offer, Offers } from '../types/offer-type';
import OfferCard from './offer-card-page';

type ActiveOffer = Offer | null;

export type OfferListProps = {
    offers: Offers;
}

export default function OfferListPage (props: OfferListProps): JSX.Element {
    const [activeOffer,setActiveOffer] = useState<ActiveOffer>(null)
    console.log(activeOffer)
    return(
        <div className='cities__places-list places__list tabs__content'>
            {props.offers.map((offer: Offer): JSX.Element => (
                <OfferCard
                key={offer.id}
                offer={offer}
                onActive={() => setActiveOffer(offer)}
                onBlur={() => setActiveOffer(null)}
                />
            ))}
        </div>
    )
}








    /*
  const {offers} = props;
  {const itemList = offers.map((value: Offer, id: number) =>
    <OfferCard key={id} offer={value}/>);
  return(
    <div className='cities__places-list places__list tabs__content'>
      {itemList}
    </div>
  );}
}
*/



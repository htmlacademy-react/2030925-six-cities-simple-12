import { Icon } from 'leaflet';
import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city-type';
import { Offers, Offer } from '../../types/offer-type';

type MapProps = {
    className: string;
    city: City;
    offers: Offers;
    selectedPoint: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40,40],
  iconAnchor: [20,40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40,40],
  iconAnchor: [20,40]
});

export function Map(props: MapProps): JSX.Element {
  const {city,offers,selectedPoint,className} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.city.location.lat,
              lng: offer.city.location.lng,
            },
            {
              icon:
                    selectedPoint !== undefined && offer.city.name === selectedPoint.city.name
                      ? currentCustomIcon
                      : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map,offers,selectedPoint,className]);
  return <div style={{height: '500px', width: '500px'}} ref={mapRef}></div>;
}

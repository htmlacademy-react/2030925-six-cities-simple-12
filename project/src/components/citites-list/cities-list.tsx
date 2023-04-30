import React from 'react';
import CityItem from '../citites-item/cities-item';

type CitiesListProps = {
  cities: string[];
};

function CitiesList ({ cities }: CitiesListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <CityItem city={city} key={city} />
      ))}
    </ul>
  );
}

export default React.memo(CitiesList);

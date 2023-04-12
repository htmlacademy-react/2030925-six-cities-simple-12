import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fillOffers, selectCity } from '../../store/action';

export type CitiesListProps = {
    cities: string[];
}

export default function CitiesList(props: CitiesListProps) {
  const {cities} = props;
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  const citiesList = cities.map((city) => (
    <li key={city} className="locations__item">
      <Link className={
        selectedCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'
      }
      to='/'
      onClick={() => {
        dispatch(selectCity(city));
        dispatch(fillOffers());
      }}
      >
        <span>{city}</span>
      </Link>
    </li>
  ));

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesList}
      </ul>
    </section>
  );
}

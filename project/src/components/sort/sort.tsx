import { useState } from 'react';
import { SortBy } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers/selectors';

export default function Sort(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const selectedType = useAppSelector(getOffers);
  const dispatch = useAppDispatch();

  const handleSort = (title: string) => {
    dispatch(sortOffers(title));
  };

  const sortList = Object.values(SortBy).map((sortType) => (
    <li
      key={sortType}
      className={`places__option ${sortType === selectedType ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => handleSort(sortType)}
    >
      {sortType}
    </li>
  ));
  return(
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex= {0}>
        {selectedType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortList}
      </ul>
    </form>
  );
}

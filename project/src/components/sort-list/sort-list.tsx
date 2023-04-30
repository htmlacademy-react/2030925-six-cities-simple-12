import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getSortOption } from '../../store/offers/selectors';
import { SortOption } from '../../types/sort-option';
import SortItem from '../sort-item/sort-item';

export const sortItems: SortOption[] = [
  { name: 'Popular', type: 'rating', order: 'asc' },
  { name: 'Price: low to high', type: 'cost', order: 'asc' },
  { name: 'Price: high to low', type: 'cost', order: 'desc' },
  { name: 'Top rated first', type: 'rating', order: 'desc' },
];

function OptionsList() {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeSortOption = useAppSelector(getSortOption);
  const sortPopup = useRef<HTMLSpanElement | null>(null);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        ref={sortPopup}
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleVisiblePopup}
        data-testid='active-filter-option'
      >
        {activeSortOption.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          visiblePopup ? 'places__options--opened' : ''
        }`}
      >
        {sortItems.map((sortItem) => (
          <SortItem
            {...sortItem}
            key={sortItem.name}
            toggleVisiblePopup={toggleVisiblePopup}
          />
        ))}
      </ul>
    </form>
  );
}

export default React.memo(OptionsList);

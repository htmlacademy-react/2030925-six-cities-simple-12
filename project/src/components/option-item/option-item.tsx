import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilterOptions } from '../../store/offers/offers';
import { getFilterOptions } from '../../store/offers/selectors';
import { FilterOptions } from '../../types/sort-option';

type OptionItemProps = {
  toggleVisiblePopup: () => void;
} & FilterOptions;

function OptionItem({ name, type, order, toggleVisiblePopup }: OptionItemProps) {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector(getFilterOptions);

  const onClickSetSortOption = () => {
    dispatch(setFilterOptions({name, type, order}));
    toggleVisiblePopup();
  };

  return (
    <li onClick={onClickSetSortOption} className={`places__option ${sortOption.name === name ? 'places__option--active' : ''}`} tabIndex={0}>
      {name}
    </li>
  );
}

export default React.memo(OptionItem);

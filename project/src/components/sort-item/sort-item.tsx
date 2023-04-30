import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortOption } from '../../store/offers/offers';
import { getSortOption } from '../../store/offers/selectors';
import { SortOption } from '../../types/sort-option';
/*
function SortItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const setSortOnClick = () => {
    dispatch(setSort({name,type,order}));
  };
  return(
    <li onClick={setSortOnClick} className="places__option places__option--active" tabIndex={0}>
    {name}
  </li>
  );
}

export default React.memo(SortItem)
*/
type OptionItemProps = {
  toggleVisiblePopup: () => void;
} & SortOption;

function SortItem({ name, type, order, toggleVisiblePopup }: OptionItemProps) {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector(getSortOption);

  const onClickSetSortOption = () => {
    dispatch(setSortOption({name, type, order}));
    toggleVisiblePopup();
  };

  return (
    <li onClick={onClickSetSortOption} className={`places__option ${sortOption.name === name ? 'places__option--active' : ''}`} tabIndex={0}>
      {name}
    </li>
  );
}

export default React.memo(SortItem);

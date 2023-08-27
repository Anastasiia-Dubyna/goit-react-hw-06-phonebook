import React from 'react';

import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => dispatch(setFilter(evt.target.value));
  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChange(evt)}
        ></FilterInput>
      </FilterLabel>
    </FilterStyle>
  );
};

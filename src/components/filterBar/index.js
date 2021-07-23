import React from 'react';
import { Wrapper, FilterInput, IconFilter } from './style';

const FilterBar = (props) => (
  <Wrapper>
    <FilterInput
      {...{ props }}
      placeholder="Filter by name"
    />
    <IconFilter size="17" />
  </Wrapper>
);

export default FilterBar;

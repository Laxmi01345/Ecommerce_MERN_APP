import React from 'react'
import Categories from './Categories';

const Search = ({ searchFilter }) => {
  return (
    <div>
      <Categories searchFilter={searchFilter}/>
    </div>
  )
}

export default Search;

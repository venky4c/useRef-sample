import React from 'react'

const Search = ({onSearch}) => {
  return (
    <div>
      <label htmlFor="search">Search:&nbsp;</label>
      <input id="search" onChange={onSearch} />
    </div>
  )
}
export default Search

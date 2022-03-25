import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa3'>
      <input
        onChange={searchChange}
        type='search'
        placeholder='Search robots...'
        className='pa3 ba b--orange bg-light-yellow'
      />
    </div>
  );
};

export default SearchBox;
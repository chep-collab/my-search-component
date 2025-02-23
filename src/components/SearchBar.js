import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;


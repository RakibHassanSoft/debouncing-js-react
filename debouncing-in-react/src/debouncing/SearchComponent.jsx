import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceitem, setdebounceitem] = useState('');

  // Create a debounced search function
  const performSearch = (term) => {
    console.log(`Searching for: ${term}`);
    setdebounceitem(term);
    // You can trigger API call or search logic here
  };

  const debouncedSearch = useDebounce(performSearch, 2000); // 500ms debounce delay

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    debouncedSearch(newValue); // Call the debounced function with the new search term
  };

  return (
    <div className='flex flex-col justify-center items-center mt-44'>
      <input
        className='w-1/2 m-auto border h-16 rounded-xl text-2xl text-center'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <h1 className='text-3xl mt-8 text-green-500'>The input is: {debounceitem}</h1>
    </div>
  );
};

export default SearchComponent;

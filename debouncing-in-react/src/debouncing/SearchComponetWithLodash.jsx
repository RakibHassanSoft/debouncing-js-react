
import React, { useState } from 'react';
import useDebounceWithLodash from "../hooks/useDebounceWithLodash"

const SearchComponetWithLodash = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [value,setValue] = useState('')
  // Use the custom debounce hook
  const debouncedSearch = useDebounceWithLodash((value) => {
    console.log(`Searching for: ${value}`);
    setValue(value);
    // Trigger API call or search logic here
  }, 2000); // 500ms delay

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
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
    <h1 className='text-3xl mt-8 text-green-500'>The input is : {value}</h1>
  </div>
  );
};

export default SearchComponetWithLodash;


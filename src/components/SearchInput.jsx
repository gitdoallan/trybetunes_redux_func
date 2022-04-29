import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_TERM', payload: search });
    setSearch('');
  };

  return (
    <form onSubmit={ handleSearch }>
      <label htmlFor="search">
        Search:
        <input
          type="text"
          name="search"
          id="search"
          value={ search }
          placeholder="Search"
          onChange={ (e) => setSearch(e.target.value) }
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

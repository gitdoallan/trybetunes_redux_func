import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../styles/components/SearchInput.css';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_TERM', payload: search });
    setSearch('');
  };

  return (
    <div className="search-container">
      <h1>Search</h1>
      <form onSubmit={ handleSearch }>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            value={ search }
            placeholder="Search"
            onChange={ (e) => setSearch(e.target.value) }
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
}

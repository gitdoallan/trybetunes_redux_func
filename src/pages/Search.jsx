import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';

export default function Search() {
  const { searchTerm } = useSelector(({ reducer }) => (reducer));
  return (
    <div>
      <Header />
      <h1>Search</h1>
      <SearchInput />
      {searchTerm && <SearchResults />}
      <Footer />
    </div>
  );
}

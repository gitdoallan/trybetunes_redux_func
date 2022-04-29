import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';

import '../styles/pages/Search.css';

export default function Search() {
  const { searchTerm } = useSelector(({ reducer }) => (reducer));
  return (
    <main className="search-main-container">
      <Header />
      <SearchInput />
      {searchTerm && <SearchResults />}
      <Footer />
    </main>
  );
}

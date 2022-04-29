import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/components/Header.css';

export default function Header() {
  const { name } = useSelector(({ reducer }) => reducer);

  return (
    <header className="header-container">
      <h1>
        Olá,
        {' '}
        {name}
      </h1>
      <nav>
        <Link className="hidden" to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

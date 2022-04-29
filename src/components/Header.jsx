import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { name } = useSelector(({ reducer }) => reducer);

  return (
    <div>
      <h1>
        Olá,
        {' '}
        {name}
      </h1>
      <Link to="/search">Search</Link>
      {' '}
      -
      <Link to="/favorites">Favorites</Link>
      {' '}
      -
      <Link to="/profile">Profile</Link>
    </div>
  );
}

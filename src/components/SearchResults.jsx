import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default function SearchResults() {
  const { searchTerm } = useSelector(({ reducer }) => (reducer));
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchAlbumsAPI(searchTerm)
      .then((res) => setResults(res))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <div>
      <h1>
        Resultados da busca por:
        {' '}
        {searchTerm}
      </h1>
      {loading
        ? (<span>Carregando...</span>)
        : (
          <ul>
            {results.map((element) => (
              <li key={ element.collectionId }>
                <Link to={ `/album/${element.collectionId}` }>
                  <img src={ element.artworkUrl100 } alt={ element.collectionName } />
                  <h3>{element.collectionName}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../styles/components/SearchResults.css';

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
    <section className="results-container">
      <div className="align">
        <h1>
          Resultados da busca por:
          {' '}
          {searchTerm}
        </h1>
      </div>
      {loading
        ? (<span>Carregando...</span>)
        : (
          <div className="results-content">
            {results.map((element) => (
              <div className="card" key={ element.collectionId }>
                <Link to={ `/album/${element.collectionId}` }>
                  <img src={ element.artworkUrl100 } alt={ element.collectionName } />
                  <h4>{element.collectionName}</h4>
                </Link>
              </div>
            ))}
          </div>
        )}
    </section>
  );
}

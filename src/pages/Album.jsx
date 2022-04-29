import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Album.css';

export default function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const getAlbum = async () => {
      const res = await getMusics(id);
      const filteredResults = res.filter((element) => element.kind === 'song');
      setMusics(filteredResults);
    };
    getAlbum();
  }, [id]);

  return (
    <main className="album-main-container">
      <Header />
      <h1>Album</h1>
      <div className="musics-results">
        {musics.map((element) => (
          <div className="card-music" key={ element.trackId }>
            <h4>
              {element.trackName}
            </h4>
            <audio data-testid="audio-component" src={ element.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label className="button-label" htmlFor={ element.trackId }>
              {/* Favorita
              <input id={ element.trackId } type="checkbox" /> */}
              <button onClick={ () => setFavorite(!favorite) } type="button">
                { favorite ? (
                  <AiFillHeart className="heart" />
                ) : (
                  <AiOutlineHeart className="heart" />
                )}
              </button>
            </label>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}

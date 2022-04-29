import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const getAlbum = async () => {
      const res = await getMusics(id);
      const filteredResults = res.filter((element) => element.kind === 'song');
      setMusics(filteredResults);
    };
    getAlbum();
  }, [id]);

  return (
    <div>
      <Header />
      <h1>Album</h1>
      <ul>
        {musics.map((element) => (
          <div key={ element.trackId }>
            <li>
              {element.trackName}
            </li>
            <audio data-testid="audio-component" src={ element.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor={ element.trackId }>
              Favorita
              <input id={ element.trackId } type="checkbox" />
            </label>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

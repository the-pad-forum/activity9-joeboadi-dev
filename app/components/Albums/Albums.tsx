import React, { useState, useEffect, FC } from 'react';
import styles from './Albums.module.css';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums: FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data as Album[]));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 place-content-center mb-7">
      {albums.map(album => (
        <div key={album.id} className={styles.card}>
          <h3 className='hover:italic not-italic'>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Albums;
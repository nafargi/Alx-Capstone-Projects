import React, { useEffect, useState } from 'react';

const AlbumList = ({ artistId }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://api.deezer.com/artist/${artistId}/albums`);
        const data = await response.json();
        setAlbums(data.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    if (artistId) fetchAlbums();
  }, [artistId]);

  return (
    <div className="album-list mt-32">
      
      <h1 className="text-2xl font-bold mb-6">Album page</h1>
      <div>
        {albums.map((album) => (
          <div key={album.id} className="album">
            <img src={album.cover_small} alt={album.title} />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;

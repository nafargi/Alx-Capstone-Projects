import React from 'react'

function TrendingAlbums({ albums}) {
  return (
    <div className="trending-albums">
    <h2 className="text-xl font-bold mb-4">Top Albums</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          <img
            src={album.cover_medium}
            alt={album.title}
            className="rounded-lg"
          />
          <h3 className="mt-2">{album.title}</h3>
          <p>{album.artist.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingAlbums

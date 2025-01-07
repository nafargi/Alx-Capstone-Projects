import React from 'react'

function TrendingArtists({ artists }) {
  return (
    <div className="trending-artists">
    <h2 className="text-xl font-bold mb-4">Top Artists</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {artists.map((artist) => (
        <div key={artist.id} className="artist-card">
          <img
            src={artist.picture_medium}
            alt={artist.name}
            className="rounded-lg"
          />
          <h3 className="mt-2">{artist.name}</h3>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingArtists

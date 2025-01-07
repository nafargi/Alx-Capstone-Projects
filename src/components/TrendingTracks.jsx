import React from 'react'

function TrendingTracks({tracks}) {
  return (
    <div className="trending-tracks">
    <h2 className="text-xl font-bold mb-4">Top Tracks</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tracks.map((track) => (
        <div key={track.id} className="track-card">
          <img
            src={track.album.cover_medium}
            alt={track.title}
            className="rounded-lg"
          />
          <h3 className="mt-2">{track.title}</h3>
          <p>{track.artist.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingTracks

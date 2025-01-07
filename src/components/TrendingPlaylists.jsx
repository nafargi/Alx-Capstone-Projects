import React from 'react'

function TrendingPlaylists({ playlists, onSelectTrack  }) {
  return (
    <div className="playlists">
    <h2 className="text-xl font-bold mb-4">Playlists</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="playlist-card cursor-pointer"
          onClick={() => onPlaylistClick(playlist)}
        >
          <img
            src={playlist.picture_medium}
            alt={playlist.title}
            className="rounded-lg"
          />
          <h3 className="mt-2">{playlist.title}</h3>
          <p>{playlist.nb_tracks} tracks</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingPlaylists

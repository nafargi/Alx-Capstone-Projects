import React, { useState, useEffect } from 'react';

const Playlist = () => {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-playlist');
        if (!response.ok) {
          throw new Error('Failed to fetch playlist');
        }
        const data = await response.json();
        setPlaylist(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  if (loading) {
    return <p>Loading playlist...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handlePlaylistClick = () => {
    setSelectedPlaylist(playlist.tracks.data);
  };

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    const audio = new Audio(track.preview);
    audio.play();
  };

  return (
    <div className="playlist">
      <h1 className="text-2xl font-bold mb-4">{playlist.title}</h1>
      <img
        src={playlist.picture_medium}
        alt={playlist.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="mb-2 text-gray-300">Created by: {playlist.creator.name}</p>
      <p className="mb-2 text-gray-300">Number of Fans: {playlist.fans}</p>
      <p className="mb-6 text-gray-300">Total Tracks: {playlist.tracks.total}</p>
      
      {/* Display Tracks Button */}
      <button
        onClick={handlePlaylistClick}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        View Tracks
      </button>

      {/* Display Tracks */}
      {selectedPlaylist && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {selectedPlaylist.map((track) => (
            <div
              key={track.id}
              className="p-4 bg-gray-900 text-white rounded-lg shadow-md hover:shadow-xl"
              onClick={() => handleTrackClick(track)}
            >
              <img
                src={track.album.cover_medium}
                alt={track.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-bold">{track.title}</h2>
              <p className="text-sm text-gray-400">{track.artist.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Currently Playing Track */}
      {currentTrack && (
        <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg">
          <h3 className="text-xl font-bold">Now Playing:</h3>
          <p className="text-lg">{currentTrack.title}</p>
          <p className="text-sm text-gray-400">By {currentTrack.artist.name}</p>
        </div>
      )}
    </div>
  );
};

export default Playlist;



import React, { useState, useEffect } from 'react';
import MusicPlayerBar from './MusicPlayerBar'; // For playing music
import TrackCard from './TrackCard'; // Track'

const DeezerChart = () => {
  const [chartData, setChartData] = useState({
    tracks: [],
    albums: [],
    artists: [],
    playlists: [],
    podcasts: [], // Added podcasts section

  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null); // Track to play 
  const [albumTracks, setAlbumTracks] = useState([]); // Tracks of the selected album/playlist
  const [playlistTracks, setPlaylistTracks] = useState([]); // Tracks of the selected album/playlist
  

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch('https://server-2-xi7h.onrender.com/api/chart');
        const data = await response.json();
        setChartData({
          tracks: data.tracks.data,
          albums: data.albums.data,
          artists: data.artists.data,
          playlists: data.playlists.data,
          podcasts: data.podcasts.data, // Fetch podcasts as well

        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Deezer chart:', error.message);
        setError('Failed to fetch Deezer chart');
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const fetchTracks = async (id, type) => {
    try {
      const response = await fetch(`https://server-2-xi7h.onrender.com/api/fetchTracks/${type}/${id}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setAlbumTracks(data);
      } else {
        setError('Tracks not found for this album/playlist');
      }
    } catch (error) {
      setError('Error fetching tracks');
    }
  };

  const handleItemClick = (item, type) => {
    if (type === 'track') {
      setPlayingTrack(item); // Play the selected track
    } else if (type === 'album' || type === 'playlist') {
        fetchTracks(item.id, type); // Fetch tracks for the album/playlist

      setSelectedItem({ ...item, type }); // Show album/playlist details
    } else {
      setSelectedItem({ ...item, type }); // Show details for artist or podcast
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="font-bold text-2xl mb-4">Discover Top Charts</h1>


      {/* Albums Section */}
      <section>
        <h2 className="font-semibold text-xl mb-3">Top Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {chartData.albums.map((album) => (
            <div
              key={album.id}
              className="bg-[#080820] rounded-lg flex flex-col p-3 border-gray-200 cursor-pointer"
              onClick={() => handleItemClick(album, 'album')}
            >
              <img
                src={album.cover_medium}
                alt={album.title}
                className="rounded "
              />
              <div>
                <h3 className="text-[.85rem] w-[50%] truncated-text font-medium">
                  {album.title}
                </h3>
                <p className="text-sm text-gray-500">{album.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* Show Tracks of Album/Playlist */}
       {albumTracks.length > 0 && (
        <div className="grid grid-cols-1 w-full mt-4">
          <button
            className="mb-4 px-4 py-2 bg-[#333770] text-white rounded hover:bg-[#333770]"
            onClick={() => setAlbumTracks([])} // Go back to the previous state
          >
            Back
          </button>
          <div className="flex rounded-lg relative p-4 backdrop-blur-sm bg-[#0c0c1ac7] overflow-hidden mb-4">
            <div>
              <img
                src={albumTracks[0].album.cover_medium}
                alt="album poster"
                className="w-[90%] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white">
                Album |{' '}
                <span className="border border-blue-400 px-3 py-1 rounded-2xl">
                  {albumTracks[0].album.genre || 'Unknown Genre'}
                </span>
              </h2>
              <h1 className="text-2xl text-white font-bold">
                {albumTracks[0].album.title}
              </h1>
              <p>{albumTracks[0].artist.name}</p>
            </div>
          </div>
          {albumTracks.map((track) => (
            <TrackCard key={track.id} track={track} onClick={setPlayingTrack} />
          ))}
        </div>
      )}
         {/* Artists Section */}
         <section>
            <h2 className="font-semibold text-xl mb-3">Top Artists</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {chartData.artists.map((artist) => (
                <div
                  key={artist.id}
                  className="bg-[#080820] rounded-lg flex flex-col items-center p-3 border-gray-200 cursor-pointer"
                  onClick={() => handleItemClick(artist, 'artist')}
                >
                  <img
                    src={artist.picture_medium}
                    alt={artist.name}
                    className="rounded-full"
                  />
                  <h3 className="text-[.85rem] w-[80%] text-center font-medium">
                    {artist.name}
                  </h3>
                </div>
              ))}
            </div>
          </section>


      {/* Playlists Section */}
       {/* Playlists Section */}
       <section>
        <h2 className="font-semibold text-xl mb-3">Top Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {chartData.playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[#080820] rounded-lg flex flex-col p-3 border-gray-200 cursor-pointer"
              onClick={() => handleItemClick(playlist, 'playlist')}
            >
              <img
                src={playlist.picture_medium}
                alt={playlist.title}
                className="rounded"
              />
              <h3 className="text-[.85rem] w-[70%] truncated-text font-medium">
                {playlist.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      {albumTracks.length > 0 && (
        <div className="grid grid-cols-1 w-full mt-4">
          <button
            className="mb-4 px-4 py-2 bg-[#333770] text-white rounded hover:bg-[#333770]"
            onClick={() => setAlbumTracks([])} // Go back to the previous state
          >
            Back
          </button>
          <div className="flex rounded-lg relative p-4 backdrop-blur-sm bg-[#0c0c1ac7] overflow-hidden mb-4">
            <div>
              <img
                src={albumTracks[0].album.cover_medium}
                alt="album poster"
                className="w-[90%] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white">
                Album |{' '}
                <span className="border border-blue-400 px-3 py-1 rounded-2xl">
                  {albumTracks[0].album.genre || 'Unknown Genre'}
                </span>
              </h2>
              <h1 className="text-2xl text-white font-bold">
                {albumTracks[0].album.title}
              </h1>
              <p>{albumTracks[0].artist.name}</p>
            </div>
          </div>
          {albumTracks.map((track) => (
            <TrackCard key={track.id} track={track} onClick={setPlayingTrack} />
          ))}
        </div>
      )}
     
      {/* Tracks Section */}
      <section>
        <h2 className="font-semibold text-xl mb-3">Top Tracks</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {chartData.tracks.map((track) => (
            <div
              key={track.id}
              className="bg-[#080820] rounded-lg flex flex-col  p-3 border-gray-200 cursor-pointer"
              onClick={() => handleItemClick(track, 'track')}
            >
              <img
                src={track.album.cover_medium}
                alt={track.title}
                className="rounded"
              />
              <div>
                <h3 className="text-[.85rem] w-[70%] truncated-text font-medium">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-500">{track.artist.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Show Tracks of Album/Playlist */}
      {playlistTracks.length > 0 && (
        <div className="grid grid-cols-1 w-full mt-4">
          <button
            className="mb-4 px-4 py-2 bg-[#333770] text-white rounded hover:bg-[#333770]"
            onClick={() => setAlbumTracks([])} // Go back to the previous state
          >
            Back
          </button>
          <div className="flex rounded-lg relative p-4 backdrop-blur-sm bg-[#0c0c1ac7] overflow-hidden mb-4">
            <div>
              <img
                src={playlistTracks[0].album.cover_medium}
                alt="album poster"
                className="w-[90%] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white">
                Album |{' '}
                <span className="border border-blue-400 px-3 py-1 rounded-2xl">
                  {playlistTracks[0].album.genre || 'Unknown Genre'}
                </span>
              </h2>
              <h1 className="text-2xl text-white font-bold">
                {playlistTracks[0].title}
              </h1>
              <p>{playlistTracks[0].artist.name}</p>
            </div>
          </div>
          {playlistTracks.map((track) => (
            <TrackCard key={track.id} track={track} onClick={setPlayingTrack} />
          ))}
        </div>
      )}

     {/* Podcasts Section */}
     <section>
            <h2 className="font-semibold text-xl mb-3">Top Podcasts</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {chartData.podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-[#080820] rounded-lg flex flex-col items-start p-3 border-gray-200 cursor-pointer"
                  onClick={() => handleItemClick(podcast, 'podcast')}
                >
                  <img
                    src={podcast.picture_medium}
                    alt={podcast.title}
                    className="rounded"
                  />
                  <h3 className="text-[.85rem] w-[80%] truncated-text font-medium">
                    {podcast.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
      {/* Music Player Bar */}
      {console.log("plying",chartData.tracks)}

      {playingTrack && <MusicPlayerBar track={playingTrack} tracks={chartData.tracks}   />}

     
    </div>
  );
};

export default DeezerChart;

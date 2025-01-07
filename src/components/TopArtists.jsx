import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Fetch top artists data from the server
  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/deezer-top-artists');
        setArtists(response.data.data); // Set artists data
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchTopArtists();
  }, []);

  // Play selected track's preview
  const handleArtistClick = (track) => {
    if (audio) {
      audio.pause(); // Stop any previously playing audio
    }
    const newAudio = new Audio(track.preview);
    setAudio(newAudio);
    newAudio.play();
    setSelectedTrack(track);
    setIsPlaying(true);

    newAudio.addEventListener('timeupdate', () => {
      setProgress((newAudio.currentTime / newAudio.duration) * 100);
    });

    newAudio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
    });
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Top Artists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist,index) => (
          <div
            key={artist.id}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={artist.contributors[0].picture_medium}
              alt={artist.title}
              className="w-full h-56 object-cover cursor-pointer"
              onClick={() => handleArtistClick(artist)}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{artist.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedTrack && (
        <div className="mt-6 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{selectedTrack.title}</h2>
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={togglePlay}
              className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className="absolute top-0 left-0 w-2 h-2 bg-blue-600 rounded-full cursor-pointer"
                style={{ left: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopArtists;

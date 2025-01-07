import React, { useEffect, useState } from "react";

function MusicCard() {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [audio, setAudio] = useState(null); // For managing audio playback

  // Fetch data from the server
  useEffect(() => {
    fetch("http://localhost:5000/deezer-chart")
      .then((response) => response.json())
      .then((data) => {
        // console.log('hi card js',data); // Log the data structure
        setChartData(data.tracks?.data || []); // Update with track data
      })
      .catch((error) => setError(error.message));
  }, []);

  // Function to handle track click and play the audio
  const handlePlayTrack = (track) => {
    if (audio) {
      audio.pause(); // Stop the current track if any
    }
    
    const newAudio = new Audio(track.preview); // Deezer API provides a preview URL
    setAudio(newAudio);
    setPlayingTrack(track);

    newAudio.play(); // Play the selected track's preview
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Deezer Chart</h1>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {chartData.length > 0 ? (
          chartData.map((track, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              onClick={() => handlePlayTrack(track)} // Play track on click
            >
              <img
                src={track.album.cover_medium}
                alt={track.title}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{track.title}</h2>
                <p className="text-sm text-gray-600 mt-1 truncate">{track.artist.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No data available
          </p>
        )}
      </div>

      {playingTrack && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Now Playing: {playingTrack.title}</h2>
          <p className="text-sm text-gray-600">Artist: {playingTrack.artist.name}</p>
          <audio
            controls
            src={playingTrack.preview} // Using the preview URL from Deezer API
            className="w-full mt-2"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
  };

export default MusicCard



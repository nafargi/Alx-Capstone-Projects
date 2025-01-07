import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const MusicPlayerBar = ({ track, tracks }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const playerRef = useRef(null);

  // Helper function to safely get the current track index
  const getCurrentIndex = () => {
    if (!tracks || !tracks.length || !track) return -1;
    return tracks.findIndex((t) => t.id === track.id);
  };

  const handleProgress = (state) => {
    if (state.played) {
      setPlayedPercentage(state.played * 100);
    }
  };

  const handlePlayPrevious = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return; // Prevent errors if index is invalid
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    updateTrack(tracks[prevIndex]);
  };

  const handlePlayNext = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return; // Prevent errors if index is invalid
    const nextIndex = (currentIndex + 1) % tracks.length;
    updateTrack(tracks[nextIndex]);
  };

  const updateTrack = (newTrack) => {
    if (newTrack && playerRef.current) {
      setPlayedPercentage(0); // Reset progress
      setIsPlaying(true); // Auto-play new track
    }
    if (newTrack) {
      // Update the track object safely
      track.id = newTrack.id;
    }
  };

  useEffect(() => {
    // Ensure ReactPlayer updates and plays the new track
    setIsPlaying(true);
  }, [track]);

  if (!track || !tracks || !tracks.length) {
    return <div className="text-center p-4">No tracks available</div>;
  }

  return (
    <div className="lg:ml-[12%] lg:w-[68%] fixed bottom-0 left-0 right-0 bg-spotify-green text-white flex items-center justify-between shadow-lg z-50">
      <div className="h-full relative w-full flex items-center justify-between">
        <div className="px-5 py-3 w-full flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={track.album.cover_small}
              alt={track.title}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="text-sm font-light">{track.title}</h4>
              <p className="text-xs text-gray-400">{track.artist.name}</p>
            </div>
          </div>

          <div className="flex items-center">
            <button onClick={handlePlayPrevious} className="mx-2">
              {/* Previous Button */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
              </svg>
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="">
              {isPlaying ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-onNeutralBg hover:scale-[1.05]"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-onNeutralBg hover:scale-[1.05]"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                </svg>
              )}
            </button>
            <button onClick={handlePlayNext} className="mx-2">
              {/* Next Button */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
              </svg>
            </button>
            <button
              onClick={() => setIsLooping(!isLooping)}
              className={`mx-2 ${isLooping ? "text-green-500" : ""}`}
            >
              {/* Loop Button */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.3701 7.99993L13.8701 10.598V8.99993H6.88989V12.9999H4.88989V6.99993H13.8701V5.40186L18.3701 7.99993Z"></path>
                <path d="M10.1299 16.9999H19.1101V10.9999H17.1101V14.9999H10.1299V13.4019L5.62988 15.9999L10.1299 18.598V16.9999Z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute top-0 h-1 bg-white w-full">
          <div
            className="h-full bg-blue-400"
            style={{ width: `${playedPercentage}%` }}
          ></div>
        </div>

        <ReactPlayer
          ref={playerRef}
          url={track.preview}
          playing={isPlaying}
          loop={isLooping}
          controls={false}
          width="0"
          height="0"
          onProgress={handleProgress}
        />
      </div>
    </div>
  );
};

export default MusicPlayerBar;

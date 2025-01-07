import React from "react";
import TrackCard from "../TrackCard"; // Import your TrackCard component for individual track display
import MusicPlayerBar from "../MusicPlayerBar"; // Import your MusicPlayerBar for playing tracks

const TrackList = ({ tracks, setPlayingTrack }) => {
  return (
    <div className="p-6 relative z-0 mt-20">
      <h1 className="text-2xl font-bold mb-6">Track List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Render each track using the TrackCard component */}
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onClick={() => setPlayingTrack(track)} // Set the playing track
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;

import React, { useState } from "react";
import TrackList from "../Music/TrackList"; // Import the TrackList component
import MusicPlayerBar from "../MusicPlayerBar"; // Import your MusicPlayerBar for playing tracks

const Playlist = ({ playlist, setPlayingTrack }) => {
    const handleAlbumClick = async () => {
        // When album is clicked, fetch tracks for this album /api/search/playlist
        try {
            const response = await fetch(`https://server-2-xi7h.onrender.com/api/search/playlist`);
            const data = await response.json();
          onClick(data); // Pass album tracks to the parent component (Home)
        } catch (error) {
          console.error("Error fetching album tracks:", error);
        }
      };
    
      return (
        <div
          className="bg-[#0c0c1a] mt-4 rounded-[.4rem] hover:scale-105 transition duration-300 ease-in-out"
          onClick={handleAlbumClick}
        >
          <div className="h-full px-3 pt-3 pb-4 rounded-lg backdrop-blur-[4px] hover:bg-opacity-40 transform transition duration-300 flex flex-col">
            <div className="w-full">
              <img
                src={playlist.picture_medium}
                alt={playlist.user.name}
                className="w-full object-cover rounded-[0.4rem] mb-1"
              />
            </div>
            <div className="flex flex-col mt-2">
              <p className="text-gray-400 text-sm">{playlist.user.name}</p>
              <p>{playlist.nb_tracks} Tracks</p>
            </div>
          </div>
        </div>
      );
    };

export default Playlist;


// { album, onClick }
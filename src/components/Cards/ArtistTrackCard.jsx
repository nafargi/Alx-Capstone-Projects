import React from 'react'
const ArtistTrackCard = ({ track, onClick }) => (
    <div className="bg-[#2b2f5e] mt-4 rounded-[.4rem] hover:scale-105 transition duration-300 ease-in-out">
      <div onClick={() => onClick(artist)} className="p-3">
        <img
          src={track.artist.picture_medium}
          alt={track.artist.name}
          className="w-full object-cover rounded-full mb-2"
        />
        <h3 className="text-white text-sm truncated-text">{track.artist.name}</h3>
      </div>
    </div>
  );
  

export default ArtistTrackCard

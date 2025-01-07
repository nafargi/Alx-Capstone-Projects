import React from "react";

const TrackCard = ({ track, onClick }) => {
  const handleTrackClick = () => {
    // Call the onClick function passed from the parent component
    onClick(track);
  };

  return (
    <div
      className="bg-[#b3b7e315] w-full  rounded-[.1rem]  cursor-pointer"
      onClick={handleTrackClick}
    > 
      <div className=" justify-between px-3 pt-3 pb-4 rounded-lg backdrop-blur-[4px] flex items-center ">
       <div className="flex ">
          <div className="mr-4">
                {/* Image for album cover */}
                <img
                    src={track.album.cover_small}
                    alt={track.title}
                    className=" object-cover rounded-full mb-1"
                />
            </div>

            <div className="flex flex-col justify-center lg:w-96">
                <p className="text-white text-sm font-semibold">{track.title}</p>
                <p className="text-gray-400 text-sm">{track.artist.name}</p>
            </div>
       </div>
        

        {/* Optionally, you could add additional info like track duration */}
        <div className="mt-2 text-white text-sm">
          <h1>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}</h1>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;

import React from "react";

const  TrackCardList = ({ track, onClick }) => {
  const handleTrackClick = () => {
    // Call the onClick function passed from the parent component
    onClick(track);
  };

  return (
    <div className="relative z-10">
      <div
      className=" border-b border-[#a6a7e810] py-2 rounded-[.1rem]  cursor-pointer"
      onClick={handleTrackClick}
    >
      <div className="w-full  justify-between  rounded-lg backdrop-blur-[4px] flex items-center ">
       <div className="flex gap-4  ">
          <div className="">
                {/* Image for album cover */}
                <img
                    src={track.album.cover_small}
                    className=" rounded-lg"
                />
            </div>

            <div className="flex flex-col justify-center  ">
                <p className="text-white truncated-text text-[.8rem]">{track.title_short}</p>
                <p className="text-gray-400 text-[.8rem]">{track.artist.name}</p>
            </div>
       </div>
        

        {/* Optionally, you could add additional info like track duration */}
        <div className=" text-white text-sm">
          <h1>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}</h1>
        </div>
      </div>
    </div>

    </div>

  );
};

export default TrackCardList;

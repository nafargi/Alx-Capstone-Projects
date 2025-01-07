import React, { useState } from "react";
import TrackCardList from "./TrackCardList"; // Assuming TrackCardList is imported

const TrackList = ({ tracks, onTrackClick ,trackPageGrid,onSeeMore}) => {
  const [showAllTracks, setShowAllTracks] = useState(false);

  // Determine tracks to display based on state
  const tracksToDisplay = trackPageGrid ? tracks : tracks.slice(0, 6);

  return (
    <div  className=' border border-[#ffffff10] rounded-lg flex flex-col gap-2 relative overflow-hidden'>
    <div className='w-[100%] absolute rounded-full -top-16 right-[0%] h-36 border z-0 bg-[#ada3e586] blur-[120px] '> </div>
      
    <div className="relative rounded-sm px-4 backdrop-blur-sm">
            <div className="flex justify-between py-1 items-center ">
                <h1 className=' text-xl text-white'>Track</h1>
            </div>

                <div className={`grid gap-4 ${
            trackPageGrid
               ? "grid-cols-1 "
               : "grid-cols-1"
        }`}>
                    <div className="flex flex-col ">
                        {tracksToDisplay.map((track) => (
                        <TrackCardList key={track.id} track={track} onClick={onTrackClick} />
                        ))}
                </div>
            </div>
            

            {/* "See More" / "Show Less" Button */}
            {tracks.length > 6 && (
                <div className="flex justify-start my-4">
               {
             !trackPageGrid && (
                <button
                    onClick={() => onSeeMore()}
                    className="hover:border flex h-full py-2 border border-transparent  rounded-3xl text-white text-sm px-4 hover:bg-[#3c3f75] transition"
                    >
                        See More
                        <svg   stroke="currentColor" 
                                fill="currentColor" 
                               strokeWidth="0" 
                                viewBox="0 0 24 24" 
                                className="text-onNeutralBg text-secondary" 
                                height="20" 
                                width="20" 
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                            <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                      </svg>
                </button>
            )
         }
                </div>
            )}
      </div>

    </div>
  );
};

export default TrackList;

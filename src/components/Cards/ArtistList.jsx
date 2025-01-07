import React, { useState } from 'react';
import ArtistCard from './ArtistCard'; // Import ArtistCard component

const ArtistList = ({ tracks,artistPageGrid,onSeeMore }) => {
  // State to toggle between limited and full list

  // Display either top 6 or full list based on toggle
  const displayedTracks = artistPageGrid ? tracks : tracks.slice(0, 3);

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex justify-between items-center ">
       <h1 className=' text-xl text-white'>Artist</h1>{
             !artistPageGrid && (
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
      <div className={`grid gap-4 ${
            artistPageGrid 
               ? "grid-cols-2 sm:grid-cos-3 md:grid-cols-4 lg:grid-cols-5"
               : "grid-cols-2 sm:grid-cos-3 md:grid-cols-3 lg:grid-cols-3"
        }`}>
        {displayedTracks.map((track, index) => (
          <ArtistCard
            key={index} // Using index as key for now
            artist={track} // Passing individual artist to ArtistCard
          />
        ))}
      </div>

     
    </div>
  );
};

export default ArtistList;

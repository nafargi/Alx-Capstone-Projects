
import React, { useState } from "react";
import AlbumCard from "./AlbumCard"; // Assuming this is where the AlbumCard component is being imported

const AlbumCardList = ({ albums , onClick ,albumPageGird,onSeeMore}) => {

    // Ensure albums is defined before attempting to slice
    if (!albums || albums.length === 0) {
      return <div>No albums found</div>;  // Optional: handle empty albums gracefully
    }
  
    // Determine which albums to display (6 or all)
    const albumsToDisplay = albumPageGird ? albums : albums.slice(0, 3);
  
    return (
      <div className=" flex flex-col gap-4">
         <div className="flex justify-between items-center ">
         <h1 className=' text-xl text-white'>Album</h1>{
             !albumPageGird && (
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
            albumPageGird 
               ? "grid-cols-2 sm:grid-cos-3 md:grid-cols-4 lg:grid-cols-5"
               : "grid-cols-2 sm:grid-cos-3 md:grid-cols-3 lg:grid-cols-3"
        }`}>
          {albumsToDisplay.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              onClick={onClick}  // Pass onClick handler to AlbumCard
              />
          ))}
        </div>
         
      </div>
    );
  };
  

export default AlbumCardList;

// const AlbumCard = ({ album, onClick }) => (
//     <div className="bg-[#2b2f5e] rounded-[.4rem] hover:scale-105 transition duration-300 ease-in-out">
//       <div onClick={() => onClick(album)} className="p-3">
//         <img
//           src={album.cover_medium}
//           alt={album.title}
//           className="w-full object-cover rounded-[0.4rem] mb-2"
//         />
//         <h3 className="text-white text-sm truncated-text">{album.title}</h3>
//       </div>
//     </div>
//   );
  
//   export default AlbumCard;
  

import React from "react";

const AlbumCard = ({ album, onClick }) => {
   


  const handleAlbumClick = async () => {
    // When album is clicked, fetch tracks for this album
    try {
      const response = await fetch(`https://server-2-xi7h.onrender.com/api/album/${album.id}`);
      const data = await response.json();
      onClick(data); // Pass album tracks to the parent component (Home)
      console.log('feli',data);
    } catch (error) {
      console.error("Error fetching album tracks:", error);
    }
  };

  return (
    <div
      className="bg-[#080820] rounded-lg "
      onClick={handleAlbumClick}
      
    > 
      <div className="h-full px-3 pt-3 pb-4 rounded-lg backdrop-blur-[4px] hover:bg-opacity-40 transform transition duration-300 flex flex-col">
        <div className="w-full">
          <img
            src={album.cover_medium}
            alt={album.title}
            className="w-full object-cover rounded-[0.4rem] mb-1"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white truncated-text">{album.title}</h1>
          <div className="flex justify-between">
                <p className="text-gray-400 text-sm w-[60%] truncated-text">{album.artist.name}</p>
                <p className="text-gray-400 text-sm">{album.nb_tracks} tracks</p>
          </div>
          
             <div className=" hidden">
             {/* //button play */}
                  <button class="flex bg-[#6665DD] items-center justify-center w-10 h-10 rounded-full shadow-dialog primary_linear">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-onNeutralBg !text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
                      </svg>
                  </button>
                     {/* //button stop */}
                  <button type="button" className="h-10 mt-4 w-10 bg-blue-400 rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 duration-300 ease-linear outline-none hover:scale-[1.1] transition-all "><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" class="text-onNeutralBg !text-white" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg></button>

             </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;

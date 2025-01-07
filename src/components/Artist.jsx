// import React, { useState, useEffect } from 'react';
// import MusicPlayerBar from './MusicPlayerBar';

// const Artist = ({ onClick }) => {
//   const [tracks, setTracks] = useState([]);

//   // Fetch the artist's track data
//   useEffect(() => {
//     const fetchArtistData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/search-artist?q=eminem');
//         const data = await response.json();
//         setTracks(data.data); // Set the tracks data
//       } catch (error) {
//         console.error('Error fetching artist data:', error);
//       }
//     };

//     fetchArtistData();
//   }, []);

//   return (
//     <div className="p-6 relative z-0 mt-20">
//       <h1 className="text-2xl font-bold mb-6">Artist page</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//         {tracks.map((track) => (
//           <div
//             key={track.id}
          
//             className="bg-[#2b2f5e]   rounded-[.4rem]  hover:scale-105 transition duration-300 ease-in-out"
//             onClick={() => onClick(track)} // Set the playing track
//           >
//             <div
//               className="h-full px-3 pt-3 pb-4 rounded-lg backdrop-blur-[4px]  hover:bg-opacity-40 transform transition duration-300 flex flex-col"
//             >
//               <div className="w-full">
//                 <img
//                   src={track.album.cover_medium}
//                   alt={track.title}
//                   className="w-full object-cover rounded-[0.4rem] mb-1"
//                 />
//               </div>

//               <div className="flex flex-col ">
//                  <h1 className="truncated-text">{track.title_short}</h1>
//                 <p className="text-gray-400 text-sm">{track.artist.name}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Artist;


// // style={{
// //   backgroundImage: `url(${track.album.cover_medium})`,
// //   backgroundPosition: 'left center',
// //   backgroundSize: 'cover',
// // }}



import React, { useState, useEffect } from 'react';

const Artist = ({ onClick }) => {
  const [tracks, setTracks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // Tracks initially visible

  // Fetch the artist's track data
  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch('http://localhost:5000/search-artist?q=eminem');
        const data = await response.json();
        setTracks(data.data); // Set the tracks data
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    fetchArtistData();
  }, []);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6); // Increment visible count by 6
  };

  return (
    <div className="relative z-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {tracks.slice(0, visibleCount).map((track) => (
          <div
            key={track.id}
            className="bg-blue-400 rounded-[.4rem] hover:bg-blue-950 transition duration-300 ease-in-out"
            onClick={() => onClick(track)} // Set the playing track
          >
            <div
              className="h-full px-3 pt-3 pb-4 rounded-full backdrop-blur-[4px] hover:bg-opacity-40 transform transition duration-300 flex flex-col"
            >
              <div className="w-full">
                <img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="w-full object-cover rounded-full mb-1"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="truncated-text">{track.title_short}</h1>
                <p className="text-gray-400 text-sm">{track.artist.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show "See More" button only if there are more tracks to display */}
      {visibleCount < tracks.length && (
        <button
          onClick={handleSeeMore}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Artist;

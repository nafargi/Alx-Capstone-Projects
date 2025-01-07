import React from 'react'
import TrackList from '../components/Cards/TrackList'; // Import the new TrackCard component

import Artist from '../components/Artist'
import MusicPlayerBar from '../components/MusicPlayerBar';
import TopResult from '../components/Cards/TopResult';
import AlbumCard from '../components/Cards/AlbumCard';
import ArtistCard from '../components/Cards/ArtistCard';
import PlaylistCardList from '../components/Cards/PlyalistCardList'
import AlbumCardList from '../components/Cards/AlbumCardList';
import ArtistTrackCard from '../components/Cards/ArtistTrackCard';
import ArtistList from '../components/Cards/ArtistList';
import UserCard from '../components/Cards/UserCard'
import TrackCard from '../components/TrackCard'
import { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom';


function Search({ searchResults, topResult }) {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [albumTracks, setAlbumTracks] = useState([]);
    const [playingTrack, setPlayingTrack] = useState(null);
    const tracks = searchResults?.tracks || [];
    const [selectedNav,setSelectedNav] =useState("All");
    const[isAlbumView, setIsAlbumView] = useState(false);
    const albumPageRef =useRef(null);

    const handleTabChange = (navItem) => {
    setSelectedNav(navItem);
       if(navItem === "Albums" && albumPageRef.current){
         albumPageRef.current.scrollIntoView({behavior:"smooth"});
       }
    };
    const handleAlbumClick = (albumData) => {
    setAlbumTracks(albumData.tracks.data); // Update the album tracks state with the fetched data
    setPlayingTrack(albumData.tracks.data[0]);
    setIsAlbumView(true); // Optionally set the first track to play
    };
    const handleBackClick = () => {
        setIsAlbumView(false); // Exit album view
    };
      // If no search results are available, show loading state
      if (!searchResults) {
        return <p>Loading results...</p>;
      }

      //render content based on selceted navigation state
    const renderContent =() =>{
        if(isAlbumView){
            return (
                <div className="grid grid-cols-1  w-full">
                    <button
                        className="mb-4 px-4 py-2 bg-[#333770] text-white rounded hover:bg-[#333770]"
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <div className="flex rounded-lg relative p-4 backdrop-blur-sm bg-[#0c0c1ac7] overflow-hidden mb-4">
                        <div>
                            <img
                                src={albumTracks[0].album.cover_medium}
                                alt="album poster"
                                className="w-[90%] rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-white">
                                Album |{' '}
                                <span className="border border-blue-400 px-3 py-1 rounded-2xl">
                                    {albumTracks[0].album.genre || 'Unknown Genre'}
                                </span>
                            </h2>
                            <h1 className="text-2xl text-white font-bold">
                                {albumTracks[0].album.title}
                            </h1>
                            <p>{albumTracks[0].artist.name}</p>
                        </div>
                    </div>
                    {albumTracks.map((track) => (
                        <TrackCard key={track.id} track={track} onClick={setPlayingTrack} />
                    ))}
                </div>
            );
        }
        switch(selectedNav){
            case "Tracks" : 
               return (
                 <div className=' w-full mt-4'>
                    {searchResults.tracks && (
                    <TrackList
                        tracks={searchResults.tracks}
                        onTrackClick={(track) => {
                        setPlayingTrack(track); 
                        }}
                        trackPageGrid={true}                    />
                    )}
                 </div>
               );

            case "Artists" : 
               return searchResults.artists && 
               <ArtistList 
                    tracks={searchResults.artists} 
                    artistPageGrid={true}
                />;

            case "Albums" : 
               return  (
                  <div   className="w-full">
                    {searchResults.albums &&  
                    <AlbumCardList 
                        albums={searchResults.albums}  
                        albumPageGird={true}
                    />}
                  </div>
               );
            
            case "Playlists" : 
              return  (
                <div className="w-full">
                    {searchResults.playlists &&  
                    <PlaylistCardList 
                        playlists={searchResults.playlists}  
                        onClick={handleAlbumClick}
                        playlistPageGird={true}
                    />}
                </div>
                
              );
             
            case "All" :
            default:
                 return (
                    <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-4 items-start ">
                    <div className="flex w-full flex-col flex-wrap  lg:w-[80%] gap-6 overflow-y-auto hide-scrollbar">
                    <div className=" ">
                           {topResult && (
                                 <TopResult
                                   name={topResult.name}
                                   fan={topResult.nb_fan}
                                   album={topResult.nb_album}
                                   image={topResult.picture_medium}
                                 />
                               )}
                         </div>
                         <div className="">
                             {searchResults.artists && 
                               <ArtistList 
                                tracks={searchResults.artists}
                                onClick={handleAlbumClick}
                                onSeeMore={() => handleTabChange("Artists")}
                                />}
                         </div>
                         <div>
                             <div className="" >
                               {searchResults.albums &&  
                                 <AlbumCardList
                                     albums={searchResults.albums}  
                                     onClick={handleAlbumClick}
                                     onSeeMore={() => handleTabChange("Albums")}
                                 />}
                            </div>
                        </div>
           
                        <div>
                          {searchResults.playlists && 
                           <PlaylistCardList 
                                 playlists={searchResults.playlists}  
                                 onClick={handleAlbumClick}
                                 onSeeMore={() => handleTabChange("Playlists")}
                                 />}
                         </div>
                   </div>
           
                   <div className='w-full lg:w-[40%] sticky  top-[9.5rem]'>
                     {searchResults.tracks && (
                       <TrackList
                         tracks={searchResults.tracks}
                         onTrackClick={(track) => {
                           setPlayingTrack(track); 
                         }}
                         onSeeMore={() => handleTabChange("Tracks")}

                       />
                     )}
                 </div>
                </div>
           
                 );
        }
    }
    
  return (
       <div className='mt-20  relative z-0  '>
         {/* //navigation menu */}
         <div className=" mb-8">
                <nav className='fixed w-full  p-3 z-50 bg-[#0c0c1a]'>
                    <ul className='flex gap-4'>
                        {["All","Tracks","Artists","Albums","Playlists"].map((navItem) => (
                            <li
                            key={navItem}
                            className={`cursor-pointer ${
                                selectedNav === navItem ? 'text-blue-400 font-bold' :""
                            }`}
                            onClick={()=> handleTabChange(navItem)}
                            >
                                {navItem}
                            </li>
                        ))}
                    </ul>
                </nav>
         </div>
        
        <div className="flex p-6 gap-6 mt-4 items-start ">
            {renderContent()}
        </div>   
    
         {playingTrack && (
           <MusicPlayerBar
             track={playingTrack}
             tracks={tracks}
             onClose={() => setPlayingTrack(null)} // Close the player bar
           />
         )}
    </div>
  )
}

export default Search

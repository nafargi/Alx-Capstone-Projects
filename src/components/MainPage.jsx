import React, { useState } from 'react';
import Header from './Header'
// import MusicCard from './MusicCard'
// import TopArtists from './TopArtists'
import Footer from './Footer'
import Home from '../pages/Home'
import Search from '../pages/Search'
import { Routes, Route } from "react-router-dom";
import Artist from "./Artist";
import Album from "./AlbumList";

// import Playlist from "./Playlist";
// import Podcasts from "./Podcasts";
// import Pages from "./Pages";
// import Store from "./Store";
import './CustomStyle.css'


function MainPage() {
  const [searchResults, setSearchResults] = useState({
    tracks: [],
    albums: [],
    artists: [],
    playlists: [],
    users: [],
  });
  const [topResult, setTopResult] = useState(null);


  const handleSearchResults = (data) => {
    setSearchResults(data);
  };
  const handleTopResultChange = (result) => {
    setTopResult(result);
  };
  return (
    <div className='lg:ml-[12%] md:ml-[20%]  w-full ml-0  lg:w-[68%]  h-full  flex flex-col relative text-spotify-white
    bg-pattern'>
  <Header onSearchResults={handleSearchResults}    onTopResultChange={setTopResult} /> 
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/search" element={<Search searchResults={searchResults}  topResult={topResult} />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/album" element={<Album />} />
                {/* <Route path="/playlist" element={<Playlist />} /> */}
                {/* <Route path="/podcast" element={<Podcasts />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/store" element={<Store />} /> */}
          </Routes>
        <Footer />
    </div>
  )
}

export default MainPage






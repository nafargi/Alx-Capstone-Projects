import React, { useState } from 'react'; // Ensure useState is imported
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar'
import RightMenu from './components/RightMenu'
import MainPage from './components/MainPage'

// import PlayList from './components/Playlist';

function App() {


  return (
    <main className=' '>
        <div className='flex flex-wrap'>
        
      <SideBar />
        <Routes>
          <Route path="/*" element={<MainPage />} />
        </Routes>
          <RightMenu />
        </div>
    </main>
  )
}

export default App


import React from 'react'
import ArtistList from '../Cards/ArtistList';

function Artistlister() {
    const dummyTracks = [
        { artist: { id: 1, name: 'Artist 1', picture_medium: 'url1' } },
        { artist: { id: 2, name: 'Artist 2', picture_medium: 'url2' } },
        { artist: { id: 3, name: 'Artist 3', picture_medium: 'url3' } },
        { artist: { id: 4, name: 'Artist 4', picture_medium: 'url4' } },
        { artist: { id: 5, name: 'Artist 5', picture_medium: 'url5' } },
        { artist: { id: 6, name: 'Artist 6', picture_medium: 'url6' } },
        { artist: { id: 7, name: 'Artist 7', picture_medium: 'url7' } },
      ];
    
      return (
        <div className="p-4">
          <ArtistList tracks={dummyTracks} />
        </div>
      );
}

export default Artistlister

const MusicList = ({ tracks, onPlay }) => {
    if (!tracks || tracks.length === 0) return <p>No tracks found.</p>;
  
    return (
      <div className="music-list">
        {tracks.map((track) => (
          <div key={track.id} className="track" onClick={() => onPlay(track)}>
            <img src={track.album.cover_medium} alt={track.title} />
            <p>{track.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MusicList;
  
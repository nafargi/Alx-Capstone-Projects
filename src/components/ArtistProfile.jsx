const ArtistProfile = ({ artist }) => {
    if (!artist) return null;
  
    return (
      <div className="artist-profile">
        <img src={artist.picture_medium} alt={artist.name} className="artist-image" />
        <h2>{artist.name}</h2>
      </div>
    );
  };
  
  export default ArtistProfile;
  
const ArtistCard = ({ artist, onClick }) => (
    <div className="bg-[#080820] rounded-[.4rem] hover:scale-105 transition duration-300 ease-in-out">
      <div onClick={() => onClick(artist)} className="p-3">
        <img
          src={artist.picture_medium}
          alt={artist.name}
          className="w-full object-cover rounded-full mb-2"
        />
        <h3 className="text-white text-sm truncated-text">{artist.name}</h3>
        <p>{artist.nb_fan} Followers</p>
      </div>
    </div>
  );
  
  export default ArtistCard;
  
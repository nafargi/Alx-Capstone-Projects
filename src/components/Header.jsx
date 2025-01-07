import React,{ useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Header({ onSearchResults,onTopResultChange }) {
    const [query, setQuery] = useState(""); 
    const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      try {
        // Fetch data from the backend for all search categories
        const trackResponse = await fetch(`https://server-2-xi7h.onrender.com/api/search/track?q=${query}`);
        const albumResponse = await fetch(`https://server-2-xi7h.onrender.com/api/search/album?q=${query}`);
        const artistResponse = await fetch(`https://server-2-xi7h.onrender.com/api/search/artist?q=${query}`);
        const playlistResponse = await fetch(`https://server-2-xi7h.onrender.com/api/search/playlist?q=${query}`);
        const userResponse = await fetch(`https://server-2-xi7h.onrender.com/api/search/user?q=${query}`);

        // Parse the responses
        const tracks = await trackResponse.json();
        const albums = await albumResponse.json();
        const artists = await artistResponse.json();
        const playlists = await playlistResponse.json();
        const users = await userResponse.json();

        const allResults = [
           
            ...(artists.data || [])
        
          ];
          const topResult = allResults.length > 0 ? allResults[0] : null;
    
        // Pass the results to the parent component
        onSearchResults({
          tracks: tracks.data,
          albums: albums.data,
          artists: artists.data,
          playlists: playlists.data,
          users: users.data,
        });
       
        onTopResultChange(topResult);


        console.log("Top Result:", topResult);
        console.log("Search Results:", allResults);
        // Set the top result state
        navigate(`/search?q=${query}`);
      
  
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };
  useEffect(() => {
        handleSearch();
  }, []);
  return (
    <div className="relative top-0">
            <div className='h-20 ml-0 lg:ml-[12%] w-full lg:w-[68%] fixed left-0   box-border 
            p-4 text-spotify-white z-[1] backdrop-blur-3xl bg-spotify-black bg-opacity-30'>
                <nav className='flex  justify-between items-center  lg:px-8 '>
                    <div className='flex lg:flex-row flex-col lg:gap-12 items-center'>
                        {/* <div>
                            <ul className='flex gap-5'>
                                <li><a href='#'>Profile</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div> */}
                        <form  onSubmit={handleSearch}>
                          <input  type="text"
                                value={query}
                               onChange={(e) => setQuery(e.target.value)}
                            placeholder='Artist, track or podcast...'
                           className='lg:w-[35rem] w-full px-5 py-2 rounded-lg text-spotify-white bg-spotify-green bg-opacity-40  focus:outline-none' />
                        </form>
                    </div>
                    <div>
                        <ul className='flex gap-2'>
                            {/* <li className='px-2'>
                                <a href="">
                                <svg className='w-6 fill-current text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.05566,2h-14a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h14a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19.05566,2Zm-14,2h14a1.001,1.001,0,0,1,1,1v8H17.59082a1.99687,1.99687,0,0,0-1.66406.89062L14.52051,16H9.59082L8.18457,13.89062A1.99687,1.99687,0,0,0,6.52051,13H4.05566V5A1.001,1.001,0,0,1,5.05566,4Zm14,16h-14a1.001,1.001,0,0,1-1-1V15H6.52051l1.40625,2.10938A1.99687,1.99687,0,0,0,9.59082,18h4.92969a1.99687,1.99687,0,0,0,1.66406-.89062L17.59082,15h2.46484v4A1.001,1.001,0,0,1,19.05566,20Z"></path></svg>
                                </a>
                            </li>
                            <li className='border-r-[2px] px-2 border-spotify-white'>
                                <a href="">
                                <svg className='w-6 fill-current text-white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path></svg>
                                </a>
                            </li> */}
                            <li className='px-2'>
                                <a href="" className='flex items-center gap-x-4 '>
                                Sign in 
                                <svg className='w-6 fill-current text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='overflow-hidden w-[17%] h-20 border fixed -top-2 left-52 z-0'>
            <div className=' blur-[20px] w-full  h-full  bg-fixed bg-[#7f89c361] '></div>
        </div>
    </div>
   
  )
}

export default Header

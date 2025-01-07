import React from 'react'
import banner from '../assets/banner/slide1.jpg'
import Image1 from '../assets/card/artist/image-1.png'
import Image2 from '../assets/card/artist/image-2.png'
import Image3 from '../assets/card/artist/image-3.png'
import Image4 from '../assets/card/artist/image-4.png'
import Image5 from '../assets/card/artist/image-5.png'
// import Image6 from '../assets/card/artist/image-6.png'
import Image7 from '../assets/card/artist/image-7.png'
import Image8 from '../assets/card/artist/image-8.png'
import Image9 from '../assets/card/artist/image-9.png'
import Image10 from '../assets/card/artist/artist1.jpg'
import Image11 from '../assets/card/artist/artist3.jpg'
import Image12 from '../assets/card/artist/artist6.jpg'
import Image13 from '../assets/card/artist/artist7.jpg'
import Image14 from '../assets/card/artist/cover7.jpg'
import Image15 from '../assets/card/artist/artist4.jpg'
import Image16 from '../assets/card/artist/artist5.jpg'
import Image17 from '../assets/card/artist/artist8.jpg'
import Image18 from '../assets/card/artist/cover4.jpg'
import Image19 from '../assets/card/artist/artist2.jpg'
import TrackList from '../components/Cards/TrackList'; // Import the new TrackCard component
import Search from './Search'; // Assume this is your search bar component
import { useState, useEffect } from 'react'

import Artist from '../components/Artist'
import TopArtists from '../components/TopArtists'
// import MusicPlayerBar from '../components/MusicPlayerBar';
// import TopResult from '../components/Cards/TopResult';
// import AlbumCard from '../components/Cards/AlbumCard';
// import ArtistCard from '../components/Cards/ArtistCard';
// import PlaylistCardList from '../components/Cards/PlyalistCardList'
// import AlbumCardList from '../components/Cards/AlbumCardList';
// import ArtistTrackCard from '../components/Cards/ArtistTrackCard';
// import ArtistList from '../components/Cards/ArtistList';
// import UserCard from '../components/Cards/UserCard'
// import TrackCard from '../components/TrackCard'
// import { useState, useEffect } from 'react'
import DeezerChart from '../components/DeezerChart';







function Home() {

  return (
  <div className='mt-20 p-6 relative z-0  w-full '>
 
 <DeezerChart />
    {/* --------------------------------- Top - music section------ */}
  <div className='relative overflow-hidden rounded-2xl my-16 z-10'>
        {/* <div className='w-60 absolute rounded-full top-80 left-0 h-full border z-0 bg-indigo-600 blur-[130px] '> </div> */}
        <div className='w-64 absolute rounded-full lg:bottom-80 right-[40%] h-36 lg:h-full border z-0 bg-[#ada3e5] blur-[130px] '> </div>
        <div className='flex w-full flex-wrap lg:flex-nowrap gap-x-6 backdrop-blur-2xl  p-6 bg-white bg-opacity-5 relative z-2'>
  {/*-------------------------------------------cardd 1 -----------------------------------------*/}
             <div className=' w-full relative z-3'>
                  <h1 className="flex gap-x-4   my-8  text-3xl text-white ">
                    <svg className='fill-current text-spotify-green w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"></path></svg> 
                     Top Singles
                  </h1>

                  <ol className='w-full mt-8 flex flex-col'>
                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>1</h1>
                                  </div>
                                    <img src={Image1} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>2</h1>
                                  </div>
                                    <img src={Image2} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>3</h1>
                                  </div>
                                    <img src={Image3} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>4</h1>
                                  </div>
                                    <img src={Image4} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>5</h1>
                                  </div>
                                    <img src={Image5} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>


                  </ol>
             </div>

  {/*-------------------------------------------cardd 2 -----------------------------------------*/}
            <div className=' w-full'>
                  <h1 className="flex gap-x-4  my-8  text-3xl text-white ">
                  <svg className='fill-current text-spotify-green w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.12,2.21A1,1,0,0,0,18.26,2l-8,2A1,1,0,0,0,9.5,5V15.35A3.45,3.45,0,0,0,8,15a3.5,3.5,0,1,0,3.5,3.5V10.78L18.74,9l.07,0L19,8.85l.15-.1a.93.93,0,0,0,.13-.15.78.78,0,0,0,.1-.15.55.55,0,0,0,.06-.18.58.58,0,0,0,0-.19.24.24,0,0,0,0-.08V3A1,1,0,0,0,19.12,2.21ZM8,20a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,8,20ZM17.5,7.22l-6,1.5V5.78l6-1.5Z"></path></svg>                    New singles
                  </h1>

                  <ol className='w-full mt-8 flex flex-col '>
                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>1</h1>
                                  </div>
                                    <img src={Image15} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>2</h1>
                                  </div>
                                    <img src={Image16} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>3</h1>
                                  </div>
                                    <img src={Image17} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                       <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>4</h1>
                                  </div>
                                    <img src={Image18} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>5</h1>
                                  </div>
                                    <img src={Image19} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>


                  </ol>
             </div>

  {/*-------------------------------------------cardd 3 -----------------------------------------*/}

              <div className=' w-full'>
                  <h1 className="flex gap-4 my-8 text-3xl text-white ">
                     <svg className='fill-current text-spotify-green w-8'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"></path></svg>
                     Podcast
                  </h1>

                  <ol className='w-full  flex flex-col '>
                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>1</h1>
                                  </div>
                                    <img src={Image13} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                       <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>2</h1>
                                  </div>
                                    <img src={Image10} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                       <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>3</h1>
                                  </div>
                                    <img src={Image14} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                       <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center border-b border-border-gray p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>4</h1>
                                  </div>
                                    <img src={Image11} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>

                        <li className='flex justify-between items-center  p-3 '>
                            <div className='flex gap-x-4 items-center'>
                                  <div>
                                      <img src="" alt="" />
                                      <h1>5</h1>
                                  </div>
                                    <img src={Image12} alt="" className='w-12 rounded-lg'/>

                                    <div>
                                      <h1 className='text-white text-[.9rem]'>Cinematic</h1>
                                      <h3 className=' text-[.7rem]'>AudioPizza</h3>
                                    </div>
                            </div>

                            <div>
                                 <span className='text-[.85rem]'>2:45</span>
                            </div>
                        </li>


                  </ol>
             </div>

     </div>
  </div>
{/* upcomminng events */}
   <h1 className='text-4xl my-12'>Upcoming Events</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  lg:h-[20rem] relative z-10'>
             <div className="w-full bg-[url('./assets/bg/event1.jpg')] bg-center bg-cover bg-no-repeat rounded-md">
                    <div className='flex flex-col items-start justify-between bg-black bg-opacity-50 h-full p-4'>
                        <button className='flex items-center gap-x-2 bg-spotify-green px-4 py-2 rounded-lg text-spotify-black'> 
                           <svg className='w-8 fill-current text-spotify-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path></svg>
                             Sold out                       
                         </button>

                        <div className=''>
                            <div className='mb-6'>
                                    <h1 className='text-white text-xl'>March 14, 2024</h1>
                                    <h3 className='text-spotify-white text-sm'>8:00 pm</h3>
                            </div>
                            <div>
                                <h1 className='text-white text-xl'>Sorry Babushka</h1>
                                <h3 className='text-spotify-white text-sm'>1 East Plumb Branch St.Saint Petersburg, FL 33702</h3>
                            </div>
                           
                        </div>
                       
                    </div>
             </div>
             <div className=" w-full bg-[url('./assets/bg/event2.jpg')] bg-center bg-cover bg-no-repeat rounded-md ">
                    <div className='flex flex-col items-start justify-between bg-black bg-opacity-50 h-full p-4'>
                         <button className='flex items-center gap-x-2 bg-spotify-black px-4 py-2 rounded-lg text-spotify-white'> 
                           <svg className='w-8 fill-current text-spotify-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path></svg>
                            Buy ticket 
                         </button>

                            <div className=''>
                                <div className='mb-6'>
                                        <h1 className='text-white text-xl'>March 14, 2024</h1>
                                        <h3 className='text-spotify-white text-sm '>8:00 pm</h3>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl'>Sorry Babushka</h1>
                                    <h3 className='text-spotify-white text-sm'>1 East Plumb Branch St.Saint Petersburg, FL 33702</h3>
                                </div>
                            
                            </div>
                    </div>
             </div>
             <div className="w-full bg-[url('./assets/bg/event3.jpg')] bg-center bg-cover bg-no-repeat rounded-md">
                    <div className='flex flex-col items-start justify-between bg-black bg-opacity-50  h-full p-4'>
                           <button className='flex items-center gap-x-2 bg-spotify-black px-4 py-2 rounded-lg text-spotify-white'> 
                             <svg className='w-8 fill-current text-spotify-green' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path></svg>
                                Buy ticket 
                          </button>
     
                            <div className=''>
                                <div className='mb-6'>
                                        <h1 className='text-white text-xl'>March 14, 2024</h1>
                                        <h3 className='text-spotify-white text-sm'>8:00 pm</h3>
                                </div>
                                <div>
                                    <h1 className='text-white text-xl'>Sorry Babushka</h1>
                                    <h3 className='text-spotify-white text-sm'>1 East Plumb Branch St.Saint Petersburg, FL 33702</h3>
                                </div>
                            
                            </div>
                    </div>
             </div>
   </div>
{/* --------------------- artist section ---------------------*/}
  {/* <div className='relative z-10'>
      <h1 className='text-4xl my-12'>Artists</h1>
      <Artist />
  </div> */}

{/*--------------------------------- prodact section------ */}
  <div className='relative z-10'>
    <h1 className='text-4xl my-12'>News</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='flex-1   rounded-xl bg-blue-950 backdrop-blur-xl bg-opacity-5 overflow-hidden h-96  border border-lime-950'>
             <div className="bg-[url('./assets/bg/news2.jpg')] w-full h-[60%] bg-no-repeat bg-cover bg-center flex flex-col justify-between items-start p-4">
                 <span className='bg-spotify-black px-4 py-2 rounded'>Watch Backstage</span>
                 <span className='bg-blue-500 px-2 text-white  rounded'>Music</span>
             </div>
             <div className='p-4 flex flex-col justify-between h-[40%]'>
                   <h1 className="text-white text-xl ">Foo Fighters Shar new Live Version new Live version of 'No Son of Mine'</h1>
                   <div className="flex justify-between">
                      <span className="text-[.75rem] text-spotify-green">2 hours ago</span>
                      <span className="text-[.75rem]">61</span>
                   </div>
             </div>

        </div>

        <div className='flex-1  rounded-xl bg-spotify-green  backdrop-blur-xl bg-opacity-5 overflow-hidden  h-96 border border-lime-950'>
             <div className="bg-[url('./assets/bg/news3.jpg')] w-full h-[60%] bg-no-repeat bg-cover bg-center flex flex-col justify-between items-start p-4">
                 <span className='bg-spotify-black px-4 py-2 rounded'>Watch Backstage</span>
                 <span className='bg-blue-500 px-2 text-white rounded'>Music</span>
             </div>
             <div className='p-4 h-[40%] flex flex-col justify-between'>
                   <h1 className="text-white text-xl">Foo Fighters Shar new Live Version new Live version of 'No Son of Mine'</h1>
                   <div className="flex justify-between">
                      <span className="text-[.75rem] text-spotify-green">2 hours ago</span>
                      <span className="text-[.75rem]">61</span>
                   </div>
             </div>

        </div>

        <div className='flex-1  rounded-xl bg-spotify-green backdrop-blur-xl bg-opacity-5 overflow-hidden border border-lime-950  h-96'>
             <div className="bg-[url('./assets/bg/news1.jpg')] w-full h-[60%] bg-no-repeat bg-cover bg-center flex flex-col justify-between items-start p-4">
                 <span className='bg-spotify-black px-4 py-2 rounded'>Watch Backstage</span>
                 <span className='bg-blue-500 px-2 text-white  rounded'>Music</span>
             </div>
             <div className='p-4 h-[40%] flex flex-col justify-between'>
                   <h1 className="text-white text-xl">Foo Fighters Shar new Live Version new Live version of 'No Son of Mine'</h1>
                   <div className="flex justify-between">
                      <span className="text-[.75rem] text-spotify-green">2 hours ago</span>
                      <span className="text-[.75rem]">61</span>
                   </div>
             </div>

        </div>
    </div>
  </div>
    </div>
  )
}

export default Home

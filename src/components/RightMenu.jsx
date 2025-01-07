import React from 'react'
import Logo from '../assets/logo/main.png'
import Logo1 from '../assets/logo/logo.png'
import MusicLogo from '../assets/icons/muisc.svg'
import Sound from '../assets/icons/volume.png'
// import MusicNote from '../assets/icons/musical-note.png'
import PlayList from '../assets/icons/list-music.png'
import Image12 from '../assets/card/artist/artist6.jpg'
import Image13 from '../assets/card/artist/artist7.jpg'
import Image14 from '../assets/card/artist/cover7.jpg'
import Image15 from '../assets/card/artist/artist4.jpg'
import Image16 from '../assets/card/artist/artist5.jpg'
import Image17 from '../assets/card/artist/artist8.jpg'
import Image18 from '../assets/card/artist/cover4.jpg'
import Image19 from '../assets/card/artist/artist2.jpg'


function RightMenu() {
  return (
    <aside className='lg:w-[20%] h-full fixed right-0 backdrop-blur-sm bg-[#38417f] text-spotify-white lg:block md:hidden my-component top-0  ' >
         <div className='  bg-spotify-blacko h-full  border-l  border-border-gray  '>
    
            <div className='w-full h-[5.021rem]  box-border border-t  border-gray-green
            px-12 flex  items-center  '>
                <h1 className='text-white text-2xl'>Top Picks</h1>
            </div>
                    
            <div className="flex flex-col  px-2  mt-[-.045rem]">
                <div className="flex gap-x-4 p-4 items-center border-b border-border-gray pb-4">
                    <div className='w-12'>
                        <img src={Image12} alt="music poster" className='rounded-xl w-full'/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                            <h1 className='text-white '>Space Melody</h1>
                            <small className=''>Florida Georgia</small>
                    </div>
                </div>
                <div className="flex gap-x-4 p-4 items-center border-b border-border-gray pb-4">
                    <div className='w-12'>
                        <img src={Image13} alt="music poster" className='rounded-xl w-full'/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                            <h1 className='text-white '>Space Melody</h1>
                            <small className=''>Florida Georgia</small>
                    </div>
                </div>
                <div className="flex gap-x-4 p-4 items-center border-b border-border-gray pb-4">
                    <div className='w-12'>
                        <img src={Image14} alt="music poster" className='rounded-xl w-full'/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                            <h1 className='text-white '>Space Melody</h1>
                            <small className=''>Florida Georgia</small>
                    </div>
                </div>
                <div className="flex gap-x-4 p-4 items-center border-b border-border-gray pb-4">
                    <div className='w-12'>
                        <img src={Image15} alt="music poster" className='rounded-xl w-full'/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                            <h1 className='text-white '>Space Melody</h1>
                            <small className=''>Florida Georgia</small>
                    </div>
                </div>
                <div className="flex gap-x-4 p-4 items-center border-b border-border-gray pb-4">
                    <div className='w-12'>
                        <img src={Image19} alt="music poster" className='rounded-xl w-full'/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                            <h1 className='text-white '>Space Melody</h1>
                            <small className=''>Florida Georgia</small>
                    </div>
                </div>
            </div>  
               
                
        </div>
    </aside>
  )
}

export default RightMenu

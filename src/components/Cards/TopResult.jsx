import React from "react";

function TopResult({ name, fan,album, image }) {
  return (
    <div className="border border-[#465df32f] relative overflow-hidden rounded-lg">
        <div className='w-72 absolute rounded-full bottom-20 -left-[5%] h-48  z-0 bg-[#222747fa]  '> 
          <img src={image} alt={name} className="w-full  rounded-full" />
        </div>
        <div className='w-64 absolute rounded-full top-1 -right-[13%] h-64 border-[32px] border-[#5f63b1]  bg-[#3e3cad61]  blur-[110px] z-10  '> </div>
    <div className= "backdrop-blur-sm bg-[#0c0c1ac7]  p-4 rounded-lg flex flex-col ">
       <h1 className='text-xl text-white font-bold mb-4'>Top results</h1>

        <div className="flex w-full items-center gap-4 lg:gap-20 ">
        <img src={image} alt={name} className="lg:h-48 h-28 shadow-2xl border-2 border-blue-3 rounded-full" />
      <div className="">
        <h1 className=" text-2xl lg:text-3xl font-bold">{name}</h1>
             <div className="flex gap-4">
                <p className="lg:text-xl text-gray-400">{fan} fans</p>
                <p className="lg:text-xl text-gray-400">{album} album</p>
             </div>
      </div> 
        </div>
    </div>
    </div>
    
  );
}

export default TopResult;

import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
<div className='flex w-full flex-row  justify-end'>
        <div className='flex w-full flex-col  items-start content-end'>
            <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}<span id='wave' className='text-5xl'>👋</span></h1>
            <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-purple-600'>{AppText.abhaythanak}</h1> */}
            <Typewriter
  options={{
    strings: [AppText.abhaythanak, AppText.FrontedDeveloper],
    autoStart: true,
    loop: true,
    
  }}
/>
</div>
<div>
  <h1 className='my-5 text-gray-400'>I am Abhay Thanak Exploring the Programming World.</h1>
</div>
            <button class="rounded-2xl">
            <a href="Abhay-Thanak (2).pdf" download="Abhay-Thanak (2).pdf" class="relative px-6 py-3 font-bold text-white rounded-lg group">
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative">RESUME</span>
</a>
            </button>
            
            
        </div>
        </div>
        <div className=' w-full flex justify-center'>
          {/* <img src={homeImage}  className="w-[200px] md:w-[300px]" alt='homeImg'/> */}
          <img src='https://media.tenor.com/1JRARHVuEtUAAAAi/rafsdesign-rafs.gif' alt='plane'/>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import './../assets'
import './../Components'
import { book, laptop, wave } from './../assets'
import { aboutSection, AppText } from '../Constants'
const AboutMe = () => {
  return (
    <div id="aboutme" className='mt-28 w-full bg-gray-800 rounded-lg '>
          {/* <img src={wave}  className="w-screen absolute " alt='wave'/> */}
        <div className='w-full bg-gray-800 h-56 rounded-lg  justify-center  items-center  '>
        <div className='flex flex-row justify-between absolute'>
            <img src={laptop}  className="w-[150px] md:w-80 mt-[-120px] " alt='laptop' />
        </div>
            <h1 className='text-red-100  text-[50px] pt-[20px] font-bold text-center  transition ease-in-out delay-100 hover:scale-150'>About <span className='text-black'>Me</span></h1>
            {/* <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>{AppText.aboutMeDescripion} </h1> */}
        </div>
        {/* <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '> */}
           {/* {
            aboutSection.map((item,index)=>(
               
                <div key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-purple-600 rounded-lg py-2">
                <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover" alt='itemImage'/>
                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
                    </div>
             

            ))
            } */}

            <div className='max-w-5xl lg:ml-64  w-full grid sm:grid-cols-2 lg:gap-8   px-4 '>
              <div className='sm:text-right text-4xl font-bold mb-16 '>
                <p>This is the new journey. Please take a look around</p>
              </div>
              <div>
                <p>I have a friendly personality and enjoy interacting with others. I am genuine, and people can see that I am authentic and honest.
                   I am a hard worker and am always putting in the extra effort to achieve my goals. I am innovative and always looking for new ways to improve current systems or processes.
                </p>
              </div>
            </div>
            
        {/* </div> */}
    </div>
   
  )
}

export default AboutMe
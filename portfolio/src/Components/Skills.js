/* eslint-disable no-unused-vars */
import React from 'react'
import './../assets'
import { skill } from './../assets'
import './../Constants'
import { AppText, skillsList, workDetail } from './../Constants'

const Skills = () => {
  return (
    <div className='mt-16 mb-20' id="skills">
        <div className='flex flex-row justify-center items-center transition ease-in-out delay-100 hover:scale-150 mb-12'>
        <img src={skill} className="w-[70px] hover:animate-pulse " alt='skill'/>
        <h1 className='text-[40px]  font-bold'>{AppText.Skills}<span className='text-white'>{AppText.Experties}</span></h1>
        </div>
        <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
          <div className='grid grid-cols-4 md:grid-cols-4 gap-8 lg:place-self-stretch  items-center'>
            {skillsList.map((item, index)=>(
                <div className='lg:mx-20 w-[60px] transition ease-in-out delay-100 hover:scale-150 bg-slate-800
                 p-3 rounded-full' >
                    <img src={item.icon} 
                    className="w-16 " alt='icon'/>
                </div>
               
            ))}
                </div>
                {/* <div className='flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
                    {workDetail.map((item,index)=>(
                        <div className='flex flex-row mb-6'>
                            <div className='mr-10 font-bold'>
                                 <h2>{item.year}</h2>
                            </div>
                            <div>
                                <h3 className='font-bold w-full'>{item.position}</h3>
                                <h3 className='font-thin text-[15px] text-gray-400'>{item.compnayName}</h3>

                                </div>
                        </div>
                       
                    ))}
                 
                </div> */}
        </div>
    </div>
  )
}

export default Skills
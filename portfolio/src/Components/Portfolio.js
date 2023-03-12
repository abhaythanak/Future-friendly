// import React, { useEffect, useState } from 'react'
import { AppText, portfolio, workDetail } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'
const Portfolio = () => {

    // const [portfolioList,setPortfolioList]=useState([]);
    // const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    // useEffect(()=>{
        
    //     setPortfolioList(portfolio);
    //     setPortfolioListOrg(portfolio)
    // },[])
    // const filterPortfolio=(type)=>{
    //     if(type=='All')
    //     {
    //         setPortfolioList(portfolioListOrg);
    //     }
    //     else{
    //        const result= portfolioListOrg.filter(item=>item.type==type);
    //        setPortfolioList(result)
    //        console.log(result) 
    //     }
    // }
  return (
    <div className='mt-5 flex justify-center flex-col mb-32'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
        {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
        {/* <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} /> */}
        <img src={robo} className="w-20 ml-5 animate-bounce" alt='robot'/>
        </div>
        {/* <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
            <button onClick={()=>filterPortfolio('All')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>All</button>
             <button  onClick={()=>filterPortfolio('ui/ux')}  className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>UI/UX</button>
             <button onClick={()=>filterPortfolio('website')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web App</button>
             <button onClick={()=>filterPortfolio('mobile')} className='border-purple-600 border-2 
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Mobile App</button>
        </div> */}
        {/* <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 '>
            {portfolioList.map((item,index)=>(
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110'>
                    <img src={item.imageUrl} className="h-[180px] object-cover rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                    <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>

                </div>
            ))}
        </div> */}

             <div className='flex justify-center mt-5 flex-col  items-center md:mt-0 lg:mt-0'>
                    {workDetail.map((item,index)=>(
                        <div className='flex flex-row mb-6 mt-10'>
                            <div className='mr-10 font-bold  items-center'>
                                 <h2>{item.year}</h2>
                            </div>
                            <div>
                            <h3 className=' text-xl font-bold '>{item.compnayName}</h3>
                            <h3 className=' w-full text-gray-400'>{item.position}</h3>

                                </div>
                        </div>
                       
                    ))}
                 
                </div>

    </div>
  )
}

export default Portfolio
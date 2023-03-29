import React from 'react'

const SectionHeading = ({firstTitle,secondTitle}) => {
  return (
   <div>
     <h1 className='text-[40px] font-bold text-white'>{firstTitle}
        <span className='text-black'>{secondTitle}</span></h1>
        
   </div>
  )
}

export default SectionHeading
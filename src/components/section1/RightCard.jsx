import React from 'react'

import RightCardContent from './RightCardContent';
const RightCard = (props) => {
  return (
    <div className='h-full  shrink-0 overflow-hidden relative w-70 bg-red-500 rounded-4xl'>
      <img  className='h-full w-full object-cover' src={props.img}/>
      <RightCardContent intro={props.intro}  id={props.id} name={props.name}/>
      
    
    </div>
  )
}

export default RightCard

import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    
        <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full '>
<h2 className='bg-white text-1xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}

</h2>
<div >
  <p className='text-1xl font-semibold text-white leading-normal text-stroke-5 text-stroke-red text-shadow-black'>{props.intro}</p>
<div className='mt-3 jflex justify-between'>
  <button className=' bg-blue-200  text-black font-mediam px-7 py-1.5 rounded-full'>{props.name}</button>
  <button className=' bg-blue-600  text-white font-mediam px-2 py-2 rounded-full'> <MoveRight /></button>
</div>

</div>
    </div>
    
  )
}

export default RightCardContent

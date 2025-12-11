import React from 'react'

import HeroText from './HeroText';
import Arrow from './Arrow';
const LeftContent = () => {
  return (
    <div className='h-[76vh] flex flex-col justify-between w-1/3 '>
        <HeroText/>
      <Arrow/>
    </div>
  )
}

export default LeftContent

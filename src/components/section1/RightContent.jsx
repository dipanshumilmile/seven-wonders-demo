import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-[80vh] overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 flex'>
      {props.users.map(function(elem, idx){
        return <RightCard  key={idx} id={idx+1} img={elem.img} intro={elem.intro} name={elem.name}/>
      }
      )}
     
    </div>
  )
}

export default RightContent

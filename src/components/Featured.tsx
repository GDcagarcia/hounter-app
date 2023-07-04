import React from 'react'
import Subtitle from './Subtitle'
import MyMenu from './MyMenu'
import Arrows from './Arrows'
import CardContainer from './CardContainer'



function Featured() {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex justify-between mx-32 mt-24 items-end'>
        <Subtitle smallText="Our recommendation" bigText="Featured House" position='normal'/>
        <MyMenu/>
        <Arrows/>
      </div>
      <CardContainer/>
    </div>
  )
}

export default Featured
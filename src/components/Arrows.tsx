import React from 'react'
import leftDark from '../img/left-black.png'
import rightWhite from '../img/right-white.svg'
import MyButton from './MyButton'

function Arrows() {
  return (
    <div className='flex gap-4'>
        <MyButton value='' color='disabled' icon={leftDark} align='left'/>
        <MyButton value='' color='dark-green' icon={rightWhite} align='left'/>
    </div>
  )
}

export default Arrows
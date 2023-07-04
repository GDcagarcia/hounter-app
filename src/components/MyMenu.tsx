import React from 'react'
import MyButton from './MyButton'
import house from '../img/house.svg'
import villa from '../img/villa.svg'
import apartment from '../img/apartment.svg'

function MyMenu() {
  return (
    <div className='flex gap-8'>
        <MyButton value='House' color='active' icon={house} align='left'/>
        <MyButton value='Villa' color='inactive' icon={villa} align='left'/>
        <MyButton value='Apartment' color='inactive' icon={apartment} align='left'/>
    </div>
  )
}

export default MyMenu
import React from 'react'
import logo from '../img/Logo.png'
import MyButton from './MyButton'
import arrowDown from '../img/arrow-down.png';

function Header() {
  return (
    <div className='flex justify-between my-11 mx-32 items-center'>
        <img src={logo} alt="Hounter"/>
        <div className='flex gap-4'>
            <MyButton value="About Us" color='white' />
            <MyButton value="Article" color='white'/>
            <MyButton value="Property" color='white' align='right' icon={arrowDown}/>
            <MyButton value="Sign Up!" color='green' margin="left"/>
        </div>
    </div>
  )
}

export default Header
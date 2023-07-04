import React from 'react'
import title from '../img/title.png'
import SearchBar from './SearchBar'
import partnership from '../img/partnership.png'
import InfoCard from './InfoCard'
import ThreeAvatars from '../img/3-avatar.png'
import AvatarOne from '../img/avatar1.png'
import AvatarTwo from '../img/avatar2.png'

function TopSection() {
  return (
    <div className='flex'>
        <div className='flex flex-col w-1/2 px-32 py-11 gap-8'>
            <img src={title} alt="Find The Place To Live Your Dreams Easily Here" />
            <p>Everything you need about finding your place to live will be here, where it will be easier for you</p>
            <SearchBar/>
            <p>Our Partnership </p>
            <img src={partnership} alt="Traveloka, Tiket.com, Airbnb, Trip Advisor" />
        </div>
        <div className='infoCard flex items-end gap-4 mb-10 pl-32 overflow-x-hidden'>
          <div className='p-6'>
          </div>
            <InfoCard caption="1K+ People" description="Successfully Getting Home"
                      avatar={ThreeAvatars} border='yes'/>
            <InfoCard caption="56 Houses" description="Sold Monthly"
                      avatar={AvatarOne} border='yes'/>
            <InfoCard caption="4K+" description=" People looking for New Homes"
                      avatar={AvatarTwo} border='yes'/>
        </div>
    </div>
  )
}

export default TopSection
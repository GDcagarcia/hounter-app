import React from 'react'
import Badge from './Badge';
import InfoCard from './InfoCard';

interface HouseCardProps {
    picture: string;
    name: string;
    price: string;
    caption: string;
    description: string;
    avatar: string;
}

function HouseCard(props: HouseCardProps) {
  return (
    <div className='flex flex-col gap-6'>
      <img src={props.picture} alt="" />
      <Badge/>
      <div className='flex flex-col gap-1'>
        <h3> {props.name} </h3>
        <p> {props.price} </p>
      </div>
      <InfoCard caption={props.caption} description={props.description}
                avatar={props.avatar} border='no'/>
    </div>
  )
}

export default HouseCard
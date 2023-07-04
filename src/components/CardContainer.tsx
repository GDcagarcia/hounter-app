import React from 'react'
import HouseCard from './HouseCard'
import house1 from '../img/house1.png'
import house2 from '../img/house2.png'
import house3 from '../img/house3.png'
import house4 from '../img/house4.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import avatar5 from '../img/avatar5.png'
import avatar6 from '../img/avatar6.png'


function CardContainer() {
  return (
    <div className='flex gap-10 min-w-max mt-10 ml-40 mb-32 card'>
        <HouseCard picture={house1} 
                   name="Roseland House"
                   price="$35.000.000"
                   caption='Diane Russell'
                   description='Manchester, Kentucky'
                   avatar={avatar3}/>
        <HouseCard picture={house2}
                   name="Woodlandside" 
                   price="$20.000.000"
                   caption='Robert Fox'
                   description='Dr. San Jose, South Dakota'
                   avatar={avatar4}/>
        <HouseCard picture={house3}
                   name="The Old Lighthouse"
                   price="$44.000.000"
                   caption='Ronald Richards'
                   description='Santa Ana, Illinois'
                   avatar={avatar5}/>
        <HouseCard picture={house4}
                   name="Cosmo's House"
                   price="$22.000.000"
                   caption='Jenny Wilson'
                   description='Jenny Wilson'
                   avatar={avatar6}/>
    </div>
  )
}

export default CardContainer
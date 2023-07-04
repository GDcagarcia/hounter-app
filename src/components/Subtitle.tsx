import React from 'react'
import OrangeLine from '../img/orange-line.png'

interface SubtitleProps {
  smallText: string;
  bigText: string;
  position: "normal" | "center";
}

const Subtitle = (props: SubtitleProps) => {

  let SubtitleStyles: string = 'flex flex-col gap-3' ;
  let BigTextStyles: string = 'text-3xl flex ';
  let OrangeTextStyles: string = "flex items-center gap-2 text-sm text-yellow-500 ";

  if (props.position === 'center'){
    SubtitleStyles = SubtitleStyles.concat("flex items-center gap-3");
    OrangeTextStyles = OrangeTextStyles.concat("flex-col")
  }else{ 
    BigTextStyles = BigTextStyles.concat('ml-10');
  }

  return (
    <div className={SubtitleStyles}>
      <div className={OrangeTextStyles}>
        <img src={OrangeLine} alt="-" />
        <h6>{props.smallText}</h6>
      </div>
      <h2 className={BigTextStyles}>{props.bigText}</h2>
    </div>
  )
}

export default Subtitle
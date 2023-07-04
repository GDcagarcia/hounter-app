import React from 'react'

interface InfoCardProps {
  caption: string;
  description: string;
  avatar: string;
  border: "yes" | "no";
}

function InfoCard(props: InfoCardProps) {
  let InfoCardStyles: string = "bg-white flex rounded-full w-fit items-center min-w-fit gap-4 ";
  if(props.border === "yes") {
    InfoCardStyles = InfoCardStyles.concat("p-4")
  }
  return (
    <div className={InfoCardStyles}>
      <img src={props.avatar} alt="Avatar" />
      <div>
        <b>{props.caption}</b>
        <p className='price'>{props.description}</p>
      </div>
    </div>
  )
}

export default InfoCard
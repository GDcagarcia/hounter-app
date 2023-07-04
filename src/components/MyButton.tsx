import React, { ReactNode } from 'react';

interface MyButtonProps {
  value: string;
  color: string;
  align?: string;
  icon?: string;
  margin?: string;
}

function MyButton(props: MyButtonProps){

  let buttonStyles : string = "";

  switch (props.color) {

    case 'white':
      buttonStyles = 'bg-opacity-10 bg-white text-white rounded-full px-4 py-2 text-sm h-fit self-center border font-semibold ';
        break;

    case 'green':
        buttonStyles = 'bg-emerald-100 text-emerald-700 rounded-full px-6 py-3 text-sm font-semibold ';
        break;

    case 'dark-green':
      buttonStyles = 'flex bg-emerald-500 text-white rounded-full px-6 py-3 text-sm font-semibold ';
      break;

    case 'active':
      buttonStyles = 'flex bg-green-100 text-green-500 rounded-full px-6 py-3 text-sm font-semibold ';
      break;

    case 'inactive':
      buttonStyles = 'flex bg-white text-neutral-500 border border-neutral-300 rounded-full px-6 py-3 text-sm font-semibold ';
      break;

      case 'disabled':
        buttonStyles = 'flex bg-neutral-300 text-neutral-700 rounded-full px-6 py-3 text-sm font-semibold ';
        break;
  
    default:
      break;
  }

  if(props.margin){
    buttonStyles = buttonStyles.concat("ml-3.5 ");
  }

  if(props.align){
    let buttonIcon : ReactNode = <img src={props.icon} alt="v"/>;
    buttonStyles = buttonStyles.concat("flex items-center gap-2 ");

    switch (props.align) {
      case "left":
        buttonStyles = buttonStyles.concat("flex-row-reverse")
        break;

      default:
        break;
    }

    return (
      <div className= {buttonStyles} >{props.value}{buttonIcon}</div>
    )
  }else{
    return (
      <div className={buttonStyles}>{props.value}</div>
    )
  }
}

export default MyButton
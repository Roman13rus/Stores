import React from 'react';
import './IconSwitch.css';

const IconSwitch = (props) => {
  const handleClick = () => {
    props.onSwitch();
  };
  if (props.icon === 'view_list') {
    return (
      <button className='click' onClick={ handleClick }>
        <span class="material-icons" style={{'font-size':'48px'}}>
          view_list
        </span>
      </button>
  )} else { 
    return (
      <button className='click' onClick={ handleClick }>
        <span class="material-icons" style={{'font-size':'48px'}}>
          view_module
        </span>
      </button>
    )};
};
export default IconSwitch;

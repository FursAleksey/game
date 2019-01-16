import React from 'react';
import './RoundNumber.css';

function RoundNumber(props) {
  return (
    <div className='roundNumber'>
      <h1>Уровень {props.roundNumber}</h1>
    </div>
  )
}

export default RoundNumber;

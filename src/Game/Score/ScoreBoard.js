import React from 'react';

function ScoreBoard(props) {
  return (
    <ol>
      <li>{props.data[0].playerName} - {props.data[0].playerScore}</li>
      <li>{props.data[1].playerName} - {props.data[1].playerScore}</li>
      <li>{props.data[2].playerName} - {props.data[2].playerScore}</li>
      <li>{props.data[3].playerName} - {props.data[3].playerScore}</li>
      <li>{props.data[4].playerName} - {props.data[4].playerScore}</li>
      <li>{props.data[5].playerName} - {props.data[5].playerScore}</li>
      <li>{props.data[6].playerName} - {props.data[6].playerScore}</li>
      <li>{props.data[7].playerName} - {props.data[7].playerScore}</li>
      <li>{props.data[8].playerName} - {props.data[8].playerScore}</li>
      <li>{props.data[9].playerName} - {props.data[9].playerScore}</li>
    </ol>
  )
}

export default ScoreBoard;
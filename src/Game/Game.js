import React, { Component } from 'react';

import Login from './Login/Login';
import './Game.css';
import Battle from "./Battle/Battle";
import Score from "./Score/Score";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      playerName: 'unknown',
      playerScore: 0,
      stageOfGame: 'login',
      intervalIsSet: false,
      data: []
    };
    this.handleClickSetPlayerName = this.handleClickSetPlayerName.bind(this);
    this.handleSetStageOfGame = this.handleSetStageOfGame.bind(this);
    this.increasePlayerScore = this.increasePlayerScore.bind(this);
  }

  handleClickSetPlayerName(name) {
    if(name.length > 0) {
      this.setState({
        playerName: name,
      })
    }
    this.handleSetStageOfGame('battle');
  }

  handleSetStageOfGame(stage) {
    this.setState({
      stageOfGame: stage
    })
  }

  increasePlayerScore(points) {
    this.setState(prevState => {
      return {
        playerScore: prevState.playerScore + points
      }
    })
  }

  render() {
    let whatIsRender;
    switch(this.state.stageOfGame) {
      case 'login': whatIsRender = (
        <Login
        onClick={this.handleClickSetPlayerName}
        />
      ); break;
      case 'battle': whatIsRender = (
        <Battle
          playerName={this.state.playerName}
          playerScore={this.state.playerScore}
          setStageOfGame={this.handleSetStageOfGame}
          putDataToDB={this.putDataToDB}
          increasePlayerScore={this.increasePlayerScore}
        />
      ); break;
      case 'score':
        whatIsRender = (
        <Score
          setStageOfGame={this.handleSetStageOfGame}
          scoreData={this.state.data}
          getDataFromDB={this.getDataFromDB}
        />
      ); break;
      default: break;
    }
    return (
      <div className='game'>
        {whatIsRender}
      </div>
    );
  }
}

export default Game;

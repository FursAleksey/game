import React, {Component} from 'react';

import Enemy from './Enemy/Enemy';
import Hero from "./Hero/Hero";
import './Battle.css';
import ChoiseAction from "./ChoiseAction/ChoiseAction";
import RoundNumber from "./RoundNumber/RoundNumber";


class Battle extends Component{
  constructor() {
    super();
    this.state = {
      hpOfHero: 100,
      hpOfEnemy: 100,
      roundNumber: 1
    };
    this.changeHeroHP = this.changeHeroHP.bind(this);
    this.changeEnemyHP = this.changeEnemyHP.bind(this);
    this.nextRound = this.nextRound.bind(this);
  }

  changeHeroHP(damage) {
    this.setState(prevState => {
      return {
        hpOfHero: prevState.hpOfHero - damage
      }
    })
  }

  changeEnemyHP(damage) {
    this.setState(prevState => {
      this.props.increasePlayerScore(damage);
      return {
        hpOfEnemy: prevState.hpOfEnemy - damage
      }
    })
  }

  nextRound() {
    this.setState(prevState => {
      return {
        hpOfEnemy: 100,
        hpOfHero: 100,
        roundNumber: prevState.roundNumber + 1
      }
    })
  }

  render() {
    if(this.state.hpOfEnemy <= 0) {
      this.nextRound();
    }
    if(this.state.hpOfHero <= 0) {
      this.props.setStageOfGame('score');
    }
    return (
      <div className='battle'>
        <RoundNumber
          roundNumber={this.state.roundNumber}
        />
        <Hero
          playerName={this.props.playerName}
          hp={this.state.hpOfHero}
        />
        <Enemy
          hp={this.state.hpOfEnemy}
        />
        <ChoiseAction
          changeHeroHP={this.changeHeroHP}
          changeEnemyHP={this.changeEnemyHP}
        />
      </div>
    )
  }
}

export default Battle;

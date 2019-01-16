import React, {Component} from 'react';

import './Enemy.css';
import HealthBar from '../HealthBar/HealthBar';
import getEnemyName from './getEnemyName';
import EnemyModel from "./EnemyModel/EnemyModel";

class Enemy extends Component{
  constructor() {
    super();
    this.state = {
      enemyName: ''
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
      enemyName: getEnemyName()
    })
  }

  render() {
    if(this.props.hp <= 0) {
      this.setState({
        enemyName: getEnemyName()
      })
    }
    return (
      <div className='enemy'>
        <HealthBar
          hp={this.props.hp}
          name={this.state.enemyName}
        />
        <EnemyModel hp={this.props.hp}/>
      </div>
    )
  }
}

export default Enemy;

import React, {Component} from 'react';
import './EnemyModel.css';
import getEnemyModel from './getEnemyModel';


class EnemyModel extends Component{
  constructor() {
    super();
    this.state = {
      heroModel: ''
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
        enemyModel: getEnemyModel()
      }
    )
  }

  render() {
    if(this.props.hp <= 0) {
      this.setState({
        enemyModel: getEnemyModel()
      })
    }
    return (
      <div className='enemyModel'>
        <img src={this.state.enemyModel.body} alt="body" className='body' width='150'/>
        <img src={this.state.enemyModel.head} alt="head" className='head' width='150'/>
        <img src={this.state.enemyModel.leftArm} alt="leftArm" className='leftArm' width='80'/>
        <img src={this.state.enemyModel.leftLeg} alt="leftLeg" className='leftLeg' width='60'/>
        <img src={this.state.enemyModel.weapon} alt="weapon" className='weapon' width='150'/>
        <img src={this.state.enemyModel.rightArm} alt="rightArm" className='rightArm' width='80'/>
        <img src={this.state.enemyModel.rightLeg} alt="rightLeg" className='rightLeg' width='60'/>
      </div>
    )
  }
}

export default EnemyModel;

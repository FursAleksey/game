import React, {Component} from 'react';
import HealthBar from "../HealthBar/HealthBar";
import './Hero.css';
import HeroModel from "./HeroModel/HeroModel";

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <HealthBar
          hp={this.props.hp}
          name={this.props.playerName}
        />
        <HeroModel/>
      </div>
    )
  }
}

export default Hero;

import React, {Component} from 'react';

import './HealthBar.css';

class HealthBar extends Component {
  render() {
    const hp = this.props.hp + '%';
    return (
      <div className='healthBar'>
        <h2>{this.props.name}</h2>
        <div className='healthBarBorder'>
          <div className='healthLose' style={{width: hp, height: '100%', backgroundColor: 'greenyellow'}}>{this.props.hp}</div>
        </div>
      </div>
    )
  }
}

export default HealthBar;

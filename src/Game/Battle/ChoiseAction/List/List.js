import React, {Component} from 'react';
import './List.css';

class List extends Component{
  render() {
    return (
      <div className='list'>
        <button name='math' onClick={this.props.onClick}>Математика</button>
        <button name='translate' onClick={this.props.onClick}>Перевод</button>
      </div>
    )
  }
}

export default List;

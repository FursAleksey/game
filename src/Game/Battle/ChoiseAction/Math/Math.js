import React, {Component} from 'react';
import './Math.css';
import getMathExample from './getMathExample';

class Math extends Component{
  constructor() {
    super();
    this.state = {
      value: '',
      example: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleClick() {
    if(+this.state.value === this.state.example.result) {
      this.props.changeEnemyHP(20);
      this.props.showList();
    } else {
      this.props.changeHeroHP(20);
      this.props.showList();
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleClick();
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
      example: getMathExample()
    })
  }

  render() {
    return (
      <div className='math' onKeyPress={this.handleKeyPress}>
        {this.state.example.firstNumber} {this.state.example.operation} {this.state.example.secondNumber} = {this.state.value}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus={true}
        />
        <button onClick={this.handleClick}>Ответить</button>
      </div>
    )
  }
}

export default Math;

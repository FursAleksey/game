import React, {Component} from 'react';
import './Translate.css';
import getTranslateExample from './getTranslateExample';

class Translate extends Component{
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
    if(this.state.example.translateWord.includes(this.state.value.toLowerCase())) {
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
      example: getTranslateExample()
    })
  }

  render() {
    return (
      <div className='translate' onKeyPress={this.handleKeyPress}>
        {this.state.example.englishWord}
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

export default Translate;

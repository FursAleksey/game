import React, {Component} from 'react';

import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    if(event.target.value.length < 15) {
      this.setState({
        value: event.target.value
      })
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.props.onClick(this.state.value)
    }
  }

  render() {
    return (
      <div className='login' onKeyPress={this.handleKeyPress}>
        <div className='login-window'>
          <h1>Ваше имя: {this.state.value}</h1>
          <input
            type="text"
            name='name'
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus={true}
          />
          <button
            onClick={() => this.props.onClick(this.state.value)}>
            Подтвердить
          </button>
        </div>
      </div>
    )
  }
}

export default Login;

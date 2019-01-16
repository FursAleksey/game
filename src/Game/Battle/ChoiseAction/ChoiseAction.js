import React, {Component} from 'react';
import './ChoiseAction.css';
import Math from "./Math/Math";
import List from "./List/List";
import Translate from "./Translate/Translate";

class ChoiseAction extends Component {
  constructor() {
    super();
    this.state = {
      playerChoise: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.showList = this.showList.bind(this);
  }

  handleClick(event) {
    this.setState({
      playerChoise: event.target.name
    })
  }

  showList() {
    this.setState({
      playerChoise: ''
    })
  }

  render() {
    let whatIsRender;
    switch (this.state.playerChoise) {
      case 'math': whatIsRender = (
        <Math
          changeHeroHP={this.props.changeHeroHP}
          changeEnemyHP={this.props.changeEnemyHP}
          showList={this.showList}
        />
      ); break;
      case 'translate': whatIsRender = (
        <Translate
          changeHeroHP={this.props.changeHeroHP}
          changeEnemyHP={this.props.changeEnemyHP}
          showList={this.showList}
        />
      ); break;
      default: whatIsRender = <List onClick={this.handleClick}/>
    }
    return (
      <div className='choiseAction'>
        {whatIsRender}
      </div>
    )
  }
}

export default ChoiseAction;

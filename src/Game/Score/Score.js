import React, {Component} from 'react';
import './Score.css';
import ScoreBoard from "./ScoreBoard";
import sortFunction from './sortFunction';

class Score extends Component{
  render() {
    let sortedScoreData = this.props.scoreData;
    sortedScoreData.sort(sortFunction);
    return (
      <div className='records'>
        <div className='records-window'>
          <h2>Лидеры</h2>
          <ScoreBoard data={sortedScoreData}/>
          <button onClick={() => this.props.setStageOfGame('login')}>Новая игра</button>
        </div>
      </div>
    )
  }
}

export default Score;

import React, {Component} from 'react';
import './HeroModel.css';

import fingersLeft from './hero/wizard_fingers.png';
import fingersRight from './hero/wizard_fingers.png';
import fistLeft from './hero/wizard_fist.png';
import fistRight from './hero/wizard_fist.png';
import hat from './hero/wizard_hat.png';
import head from './hero/wizard_head.png';
import legLeft from './hero/wizard_leg.png';
import legRight from './hero/wizard_leg.png';
import mantle from './hero/wizard_mantle.png';
import sleeveLeft from './hero/wizard_sleeve.png';
import sleeveRight from './hero/wizard_sleeve.png';
import stick from './hero/wizard_stick.png';

class HeroModel extends Component{
  render() {
    return (
      <div className='heroModel'>
        <img src={hat} alt="hat" className='hat' width='200'/>
        <img src={head} alt="head" className='head' width='140'/>
        <img src={mantle} alt="mantle" className='mantle' width='190'/>
        <img src={fingersLeft} alt="fingersLeft" className='fingersLeft' width='40'/>
        <img src={fingersRight} alt="fingersRight" className='fingersRight' width='40'/>
        <img src={fistLeft} alt="fistLeft" className='fistLeft' width='65'/>
        <img src={fistRight} alt="fistRight" className='fistRight' width='65'/>
        <img src={legLeft} alt="legLeft" className='legLeft' width='90'/>
        <img src={legRight} alt="legRight" className='legRight' width='90'/>
        <img src={sleeveLeft} alt="sleeveLeft" className='sleeveLeft' width='100'/>
        <img src={sleeveRight} alt="sleeveRight" className='sleeveRight' width='100'/>
        <img src={stick} alt="stick" className='stick' width='100'/>
      </div>
    )
  }
}

export default HeroModel;

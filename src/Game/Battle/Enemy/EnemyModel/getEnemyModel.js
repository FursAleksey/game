import body1 from './orks/1_ORK/1_ORK_body.png'
import head1 from './orks/1_ORK/1_ORK_head.png'
import leftArm1 from './orks/1_ORK/1_ORK_left arm.png'
import leftLeg1 from './orks/1_ORK/1_ORK_left leg.png'
import weapon1 from './orks/1_ORK/1_ORK_mallet.png'
import rightArm1 from './orks/1_ORK/1_ORK_right arm.png'
import rightLeg1 from './orks/1_ORK/1_ORK_right leg.png'

import body2 from './orks/2_ORK/2_ORK_body.png'
import head2 from './orks/2_ORK/2_ORK_head.png'
import leftArm2 from './orks/2_ORK/2_ORK_left arm.png'
import leftLeg2 from './orks/2_ORK/2_ORK_left leg.png'
import weapon2 from './orks/2_ORK/2_ORK_sword.png'
import rightArm2 from './orks/2_ORK/2_ORK_right arm.png'
import rightLeg2 from './orks/2_ORK/2_ORK_right leg.png'

import body3 from './orks/3_ORK/3_ORK_body.png'
import head3 from './orks/3_ORK/3_ORK_head.png'
import leftArm3 from './orks/3_ORK/3_ORK_left arm.png'
import leftLeg3 from './orks/3_ORK/3_ORK_left leg.png'
import weapon3 from './orks/3_ORK/3_ORK_Labrys.png'
import rightArm3 from './orks/3_ORK/3_ORK_right arm.png'
import rightLeg3 from './orks/3_ORK/3_ORK_right leg.png'

const partsOfModel = {
  body: [
    body1, body2, body3
  ],
  head: [
    head1, head2, head3
  ],
  leftArm: [
    leftArm1, leftArm2, leftArm3
  ],
  leftLeg: [
    leftLeg1, leftLeg2, leftLeg3
  ],
  weapon: [
    weapon1, weapon2, weapon3
  ],
  rightArm: [
    rightArm1, rightArm2, rightArm3
  ],
  rightLeg: [
    rightLeg1, rightLeg2, rightLeg3
  ]
};

function getRandomNumber() {
  return Math.round(0 - 0.5 + Math.random() * (2 + 1));
}

function getEnemyModel() {
  const enemyModel = {
    body: partsOfModel.body[getRandomNumber()],
    head: partsOfModel.head[getRandomNumber()],
    leftArm: partsOfModel.leftArm[getRandomNumber()],
    leftLeg: partsOfModel.leftLeg[getRandomNumber()],
    weapon: partsOfModel.weapon[getRandomNumber()],
    rightArm: partsOfModel.rightArm[getRandomNumber()],
    rightLeg: partsOfModel.rightLeg[getRandomNumber()]
  };
  return enemyModel;
}

export default getEnemyModel;

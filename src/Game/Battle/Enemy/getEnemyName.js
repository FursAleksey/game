import enemyNames from "./enemyNames";

function getEnemyName() {
  const firstName = enemyNames.firstName[Math.round(0 - 0.5 + Math.random() * (enemyNames.firstName.length - 1 + 1))];
  const secondName = enemyNames.secondName[Math.round(0 - 0.5 + Math.random() * (enemyNames.secondName.length - 1 + 1))];
  const thirdName = enemyNames.thirdName[Math.round(0 - 0.5 + Math.random() * (enemyNames.thirdName.length - 1 + 1))];
  return `${firstName} ${secondName} ${thirdName}`;
}

export default getEnemyName;

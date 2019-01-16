const englishWords = [
  'apple', 'pear', 'orange', 'banana', 'lemon', 'pineapple',
  'grapes', 'kiwi', 'carrot', 'onion', 'tomato', 'cabbage',
  'potato', 'cucumber', 'dog', 'cat', 'snake', 'hamster',
  'rabbit', 'goat', 'pig', 'sheep', 'horse', 'cow', 'goose',
  'chicken', 'duck', 'fox', 'wolf', 'bear', 'elephant', 'tiger',
  'lion', 'crocodile', 'giraffe'
];

const translate = {
  'apple': ['яблоко'],
  'pear': ['груша'],
  'orange': ['апельсин', 'оранжевый'],
  'banana': ['банан'],
  'lemon': ['лимон'],
  'pineapple': ['ананас'],
  'grapes': ['виноград'],
  'kiwi': ['киви'],
  'carrot': ['морковь', 'морковка'],
  'onion': ['лук', 'луковица'],
  'tomato': ['томат', 'помидор'],
  'cabbage': ['капуста'],
  'potato': ['картошка', 'картофель', 'картофелина'],
  'cucumber': ['огурец'],
  'dog': ['собака', 'пес', 'собачка', 'псина', 'кобель'],
  'cat': ['кошка', 'кот', 'котик', 'котенок'],
  'snake': ['змея', 'змей'],
  'hamster': ['хомяк'],
  'rabbit': ['кролик', 'заяц'],
  'goat': ['коза', 'козел', 'осел'],
  'pig': ['свинья', 'поросенок', 'хрюшка'],
  'sheep': ['овца', 'овечка', 'баран'],
  'horse': ['лошадь', 'конь'],
  'cow': ['корова'],
  'goose': ['гусь', 'гусыня'],
  'chicken': ['курица', 'цыпленок', 'петух'],
  'duck': ['утка'],
  'fox': ['лиса', 'лисица'],
  'wolf': ['волк'],
  'bear': ['медведь'],
  'elephant': ['слон'],
  'tiger': ['тигр'],
  'lion': ['лев'],
  'crocodile': ['крокодил'],
  'giraffe': ['жираф']
};

function getTranslateExample() {
  const wordForExample =  englishWords[Math.round(0 - 0.5 + Math.random() * (englishWords.length - 1 + 1))];
  return {
    englishWord: wordForExample,
    translateWord: translate[wordForExample]
  }
}

export default getTranslateExample;

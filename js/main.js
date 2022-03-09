const returnNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min>=max){
    console.log(-1); }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


console.log(returnNumber (0, 10));

const leightString = function сheckStringLenght (inputText, maxLenght){
if (inputText.lenght > maxLenght){
  return false;
  console.log('Слишком длинный комментарий');
} else {
  return true};

};
console.log(leightString ('комментарииииииииииииииии',10));

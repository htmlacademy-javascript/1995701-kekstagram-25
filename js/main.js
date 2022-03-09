const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min>=max){
    return false;}

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

console.log(returnNumber (0, 10));

const сheckStringLenght = ( inputText, maxlenght) => {
return inputText.length <= maxlenght
console.log(leightString ('комментарииииииииииииииии',40));
console.log(leightString ('комментарииииииииииииииии',10));

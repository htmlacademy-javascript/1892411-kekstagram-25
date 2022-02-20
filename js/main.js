//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(0, 10);

//Функция для проверки максимальной длины строки.

function maxStringLength (testString, maxLength) {
  if (testString < maxLength){
    return true;
  }
  else {
    return false;
  }
}

maxStringLength (99, 100);

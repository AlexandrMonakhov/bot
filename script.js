'use strict'
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);

};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

const start = function () {

  const randomNumber = getRandomInt(100);

  function game() {
    const num = prompt('Введите число от 1 до 100');

    if (num === null) {
      alert('До свидания');
      return;
    }

    if (isNumber(num)) {
      const realnumber = +num;

      if (realnumber > randomNumber) {
        alert('Заданное число меньше');
        game();
      }
      if (realnumber < randomNumber) {
        alert('Заданное число больше');
        game();
      }
      if (realnumber === randomNumber) {
        if (confirm('Вы угадали! Хотите сыграть еще?')) {
          start();
        }
      }

    } else {
      alert('Введите число');
      return;
    }

  }

  game();

};

start();
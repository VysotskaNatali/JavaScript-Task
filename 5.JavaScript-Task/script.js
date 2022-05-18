// Завдання 1

// Написати розв’язок нижче описаного завдання за допомогою
// конструкції switch:
// 1. Користувач вводить число в prompt
// 2. Після введення числа вистрибує алерт з оголошенням пори року
// до якої відноситься число (номер місяця) що ввів користувач.
// 3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

let seasons = +prompt(`Enter mounth here`);
switch (seasons) {
  case 12:
  case 1:
  case 2:
    console.log(`It's Winter!`);
    break;

  case 3:
  case 4:
  case 5:
    console.log(`It's Spring!`);
    break;

  case 6:
  case 7:
  case 8:
    console.log(`It's Summer!`);
    break;

  case 9:
  case 10:
  case 11:
    console.log(`It's Autumn!`);
    break;

  default:
    console.log(`Month not found  :( `);
    break;
}

// Завдання 2

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Створити функцію яка буде приймати одне число.
// 2. В середині функції перевіряємо чи це число є простим.
// 3. Після перевірки виводимо повідомлення в console.log().

function showPrimes(number) {
  let check = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      check = false;
    }
  }
 console.log(`Prime number ${num} is ${check}`);
}
let num = +prompt(`Check number here...`);
showPrimes(num);

// Завдання 3
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2. Кількість параметрів у функції може бути від 2х і більше.
// 3. Забороняється використовувати Math.max().
// — Приклад роботи:
// 1. max(5,-2) – має повернути 5.
// 2. max(5,-2, 30, 6) – має повернути 30

function maxNumber(...arg) {
  let max = 0;
  for (let i = 0; i < arg.length; i++)
    if (max < arg[i]) {
      max = arg[i];
    }

  console.log(max);
}

maxNumber(5, -2);
maxNumber(5, -2, 30, 6);
maxNumber(100, 80, 90, 260, -3);

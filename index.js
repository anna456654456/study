let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


for (let i = 0; i < 2; i++) {
  let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
  let value1 = prompt('Во сколько обойдется?', '');

  if (typeof(question1) === 'string' && typeof(question1) != null && typeof(value1) != null && 
      question1 != '' && value1 != '' && question1.length < 50) {
        console.log('ok');
    appData.expenses[question1] = value1;
  } else {
    console.log('else');
    i--;
  }
}


/*Цикл while
let i = 0;
while (i < 2) {
  let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
  let value1 = prompt('Во сколько обойдется?', '');

  if (typeof(question1) === 'string' && typeof(question1) != null && typeof(value1) != null && 
      question1 != '' && value1 != '' && question1.length < 50) {
        console.log('ok');
    appData.expenses[question1] = value1;
  } else {
    console.log('else');
    i--;
  }
  
  i++;
} */

/* Цикл do while

// let i = 0;
// do {
//   let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
//   let value1 = prompt('Во сколько обойдется?', '');

//   if (typeof(question1) === 'string' && typeof(question1) != null && typeof(value1) != null && 
//     question1 != '' && value1 != '' && question1.length < 50) {
//       console.log('ok');
//     appData.expenses[question1] = value1;
//   } else {
//     console.log('else');
//     i--;
//   }
//   i++;
// } while ( i < 2); */


appData.moneyPerDay = (money / 30);

alert( 'Ежедневный бюджет:' + appData.moneyPerDay );

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Ошибка');
}
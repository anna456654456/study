let money;
let time;

const start = () => {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
};

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let nameExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
      let summExpenses = prompt('Во сколько обойдется?', '');
    
      if (typeof(nameExpenses) === 'string' && typeof(nameExpenses) != null && typeof(summExpenses) != null && 
      nameExpenses != '' && summExpenses != '' && nameExpenses.length < 50) {
            console.log('ok');
        appData.expenses[nameExpenses] = summExpenses;
      } else {
        console.log('else');
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert( 'Ежедневный бюджет: ' + appData.moneyPerDay );
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Ошибка');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');
  
      appData.monthIncome = save/100/12 * percent;
      alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++) {
      let nameOptExpenses = prompt('Статья необязательных расходов?');
    
      appData.optionalExpenses[i] = nameOptExpenses;
    
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function() {
    let items;
    do {
      items = prompt('Что принесет допольнительный доход? (Перечислите через запятую)');
    } while(items === null || !items || (typeof(Number(items)) === 'number' && !isNaN(items)));
    
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();

    appData.income.forEach((item, index) => {
      alert('Способы доп. заработка: ' + (index + 1) + ' ' + item);
    });
  }
};

appData.chooseIncome();

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key);
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


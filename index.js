let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false
};

let key = prompt('Введите обязательную статью расходов в этом месяце', '');
let value = prompt('Во сколько обойдется?', '');

appData.expenses[key] = value;
console.log(appData);

alert( money / 30 );
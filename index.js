// alert('Я JavaScript!');

// let admin;
// let name = 'Джон';
// admin = name;
// alert(admin);

// const planetEarth;
// let currentUserName;


// let number = prompt('Введите число', '');

// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else if (number == 0) {
//   alert(0);
// }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';


// let age 

// if (age >= 14 && age <= 90) {}

// if ( !(age >= 14) && !(age <= 90)) {}

// if (age < 14 && age > 90) {}

// let login = prompt('Кто там' , '');

// if (login === 'Админ') {
//     let password = prompt('Введите пароль' , '');
//     if (password === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password == null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (login == null) {
//     alert('Отменено');
// } else {
//     alert('Я не знаю вас')
// }


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//     alert( i );
// }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
//   while (i < 3) {
//       alert( `number ${i}!` );
//       i++;
//   }



// let browser 
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break; 
// }


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


//   function checkAge(age) {
//       return age > 18 ? true : confirm('Родители разрешили?')
//   }

  
// function min(a,b) {
//     if (a>b) {
//         return b;
//     } else return a;
// }

// a = 4;
// b = 2;

// let result = min(a,b);
// alert(result);



// function pow(x, n) {
//     let result = x;
//     result = result * 2 *2 *2;
//     console.log(result)
//     // for (let i = 1; i < n; ++i) {
        
//     //   result = result * x;
//     //   console.log(result)
//     // }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }

  // function ask(question, yes, no) {
  //   if (confirm(question)) yes()
  //   else no();
  // }
  
  // ask(
  //   "Вы согласны?",
  //   function() { alert("Вы согласились."); },
  //   function() { alert("Вы отменили выполнение."); }
  // );

  // let ask = (question, yes, no) => {
  //   confirm(question) ? yes() : no();
  // }

  // const agreement = () => alert("Вы согласились.");
  // const canceled = () => alert("Вы отменили выполнение.");

  // ask("Вы согласны?",
  // agreement,
  // canceled
  // )


//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let sum = 0;

//   for (let key in salaries) {
//     sum += salaries[key];
    
//   }

//   console.log(sum)


//   let test = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   let menu = {
//     width: 500,
//     height: 400,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//        obj[key] = obj[key] * 2;
//     }
//   }
// }

// multiplyNumeric(test);
// multiplyNumeric(menu);

//   console.log(test)
//   console.log(menu)


// let num1 = +prompt('enter number', '');
// let num2 = +prompt('enter one more number', '');
// let sum = num1 + num2;
// alert(sum);

// let readNumber = +prompt('enter number', '');
// if ( typeof readNumber === 'number') {
//   alert ( 'number:' + readNumber );
// }

// const readNumber = () => {
//   let num;
//   do {
//    num = prompt('enter number', '');
//   } while (!isFinite(num));

//   if (num === null || num === '') return null;
//   return +num;
// }

// alert(`Число: ${readNumber()}`);


const random = (min, max) => {
  return min + Math.random() * (max - min);
}

alert( random(5, 7));

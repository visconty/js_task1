// var day = prompt('what is the day today?');
// alert(day);

// var role = prompt('Who are you? Guest or Director?');
// var message = (role =='Guest') ? 'Hi!':
// 			  (role == 'Director') ? 'Hello!':
// 			  (role == '') ? 'Get acquainted?':
// 			  '';
// alert(message);

//var checkMessage = answer == 'EcmaScript' ? 'Верно!' : 'Не знаете? EcmaScript!';
// alert(checkMessage);

// var who = prompt('Кто пришел?');

// var whoName;
// if (who === null) { 
//  alert('Вход отменен'); 
// } else if (who == 'Админ') {
//  var password = prompt('Пароль?');
//  if (password === 'Черный Властелин') {
//  	alert('Добро пожаловать!');
//  } else if (password === null) {
//  	alert('Вход отменен');
//  } else  {
//  	alert('Пароль неверен');
//  }
// } else {
// 	alert('Я Вас не знаю');
// }

// var previous1 = 0;
// var previous2 = 1;
// console.log(previous1);
// console.log(previous2);
// for ( i = 3; i <= 15; i++) {
// 	 	  var a = previous1 + previous2;
// 				previous1 = previous2;
// 				previous2 = a;
// console.log(a);
// }


// function capcha(){
// 	var a = Math.round(Math.random() * 10) + 10;
// 	var b = Math.round(Math.random() * 10) + 10;
// 	var c = a + b;
// 	console.log(a, b, c);
// 	var sum = prompt(a + ' + ' + b + ' = ? ');
// 	if (sum == c) {
// 		alert ('Верно');
// 	} else { 
// 		capcha();
// 	}
// }
// capcha();

// function capcha() {
// 	var max = 20; 
// 	var min = 10;
// 	var a = Math.floor(Math.random() * (1 + max - min)) + min;
// 	var b = Math.floor(Math.random() * (1 + max - min)) + min;
// 	var c = a + b;
// 	console.log(a,b,c);
// 	var sum = prompt(a + ' + ' + b + ' = ?');
// 	if (sum == c) {
// 		alert ('Верно');
// 	} else {
// 		capcha();
// 	}
//  }
//  capcha();


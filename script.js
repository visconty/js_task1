// var day = prompt('what is the day today?');
// alert(day);

//var role = 'guest';
//var message = role == 'admin' ? 'Hello, admin!' : 'Hello, guest!';
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
// var previous2 = 0;
// for (var i = 1; i <= 15; i++) {
// 	if (i == 1) {
// 		var a = 1;
// 	} else {
// 	  var a = previous1 + previous2;
// 	} 
// 	console.log(a);
// 	previous2 = previous1;
// 	previous1 = a;
// }

// function capcha(){
// 	var a = Math.round(Math.random() * 10) + 10;
// 	var b = Math.round(Math.random() * 10) + 10;
// 	var c = a + b;
// 	console.log(a, b, c);
// 	var sum = prompt(a + ' + ' + b + ' = ? ');
// 	if ( sum == c) {
// 		alert ('Верно');
// 	} else { 
// 		capcha();
// 	}
// }
// capcha();



"user strict";

//лщгические операторы
//const hamburger = 5;
//const frise = null;

//if (hamburger && frise) {
    //console.log('Я сыт!');

//}
//console.log((hamburger && frise));
//пример

//const hamburger = 2;
//const frise = 1;

//if (hamburger === 3 && frise === 1) {
    //console.log('все сыт!');

//} else{
    //console.log('goooo');
//}
// пример 2 усложняем

//const hamburger = 3;
//const frise = 1;
//const cola = 0;


//console.log(1 && 0);
//console.log(1 && 5);
//console.log(null && 6);
//console.log(0 && 'efsgrh');


//if (hamburger === 3 && cola === 1 && frise === 1) {
    //console.log('все сыт!');

//} else{
    //console.log('goooo');
//}


// оператор ИЛИ

const hamburger = 3;
const frise = 2;
const cola = 2;
const nagges = 3;


if (hamburger /*по умолчанию хотябы один*/ === 3 && cola === 4 || frise === 2 && nagges  ) {
    console.log('все сыт!');

} else{
    console.log('goooo');
}

console.log(hamburger  === 3 && cola === 4 || frise === 2 && nagges  );

let jonReport, alexReport, mariyReport, samReport = "done";
console.log(jonReport|| alexReport|| mariyReport|| samReport);

const readlineSync = require('readline-sync');
//EX 3.1
let x = readlineSync.questionInt('Entrez la valeur de x : ');
let y = readlineSync.questionInt('Entrez la valeur de y : ');
let add =x+y;
x=y;y=add-x;
console.log(" x = "+ x);
console.log("y= " + y);
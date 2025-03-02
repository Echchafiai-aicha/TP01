const readlineSync = require('readline-sync');
//EX 3.7

const PI = 3.14159;
console.log(`La valeur de PI est : ${PI}`);
try {
    PI = 3.14; 
    console.log(`Nouvelle valeur de PI : ${PI}`);
} catch (error) {
    console.log('Erreur : Impossible de modifier une constante.');
}

console.log("Starting with JS\n\n");
console.log("Exercise: create a variable called myName with your name as the value");
let myName = "Branko Haberkon";
console.log(myName);
console.log("\n||-----------------------------------||");
console.log("Exercise: Create a variable called age with a number that is your age.");
let age = 31;
console.log(age);
console.log("\n||-----------------------------------||");
console.log("Exercise: Create a variable called ignasiAge with a value 32.\n Create another variable called ageDiff and set it to an expression that calculates your age minus Ignasi's age. \n Print the value of ageDiff");
ignasiAge = 32
ageDiff = age - ignasiAge;
console.log(ageDiff);
console.log("\n||-----------------------------------||");
console.log('Exercise 4: Write a conditional that compares the variable with your age with the number 21.\n It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.');

if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}
console.log("\n||-----------------------------------||");
console.log('Exercise 5: Write a conditional that compares your age with Ignasi\'s age.\n This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Ignasi is older than you", Ignasi is younger than you", or "You have the same age as Ignasi". ');

if (age > ignasiAge) {
  console.log("Ignasi is younger than you");
} else {
  if (age < ignasiAge) {
    console.log("Ignasi is older than you");
  } else {
    if (age == ignasiAge) {
      console.log("You have the same age as Ignasi");
    } else {
      console.log("ERROR")
    }
  }
}
console.log("\n||-----------------------------------||");
console.log('Exercise 6:Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.');

let names = ["David", "Matias", "Branko", "Agus", "Andrea Briceño", "Carla Ribeiro", "catherinesofio", "Claudio Pera", "Diego Weinmann", "Antonellapasserini", "Camijeticas", "Camila G", "Fabiana S", "Gemny", "Gastón Gonzalez", "jesica", "Josefina Sofio", "JoseTT", "Kevin", "Laura Dancoso", "Leo", "Maria Berenice", "Mariana Martinez", "Martha Barzola", "Mauriciojrojas", "Miguelangel", "Nicolás Higa", "Silvia", "sol34", "Valeria Fernandez", "yenifer brito"];
names.sort(function(x, y) {
  return x.localeCompare(y);
})
console.log(names);
console.table(names);
console.log(names[0]);
console.log(names[names.length - 1]);
// names.forEach(element => {
  //   console.log(element);
  // });
  for (let index = 0; index < names.length; index++) {
    let element = names[index];
    console.log(element);
  }
  console.log("\n||-----------------------------------||");
  console.log('Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.');

let ages = [31, 23, 22, 21, 33, 34, 48, 32, 36, 32, 27, 29, 25, 43, 23, 20, 30, 27, 28, 25, 24, 23, 29, 32, 21, 32, 33, 34, 31, 29, 31, 30];

var indexWhile = 0;
while (indexWhile < ages.length) {
  let element = ages[indexWhile];
  if (element % 2 == 0) {

    console.log(element);
  }
  indexWhile++;
}

console.log("\n||-----------------------------------||");
console.log('Excercise: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.');

for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  if (element % 2 == 0) {

    console.log(element);
  }
}
console.log("\n||-----------------------------------||");
console.log('Excercise: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.');

function menorNumero(array) {
  var menor;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if(index ===0){
      var menor = element;
    }
    if (element < menor) {
      var menor = element;
    }
  }
  console.log('Array input: '+array, '\nLowest: '+menor);
}

menorNumero(ages);
console.log("\n||-----------------------------------||");
console.log('Excercise: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.');

function mayorNumero(array) {
  var mayor;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if(index ===0){
      var mayor = element;
    }
    if (element > mayor) {
      var mayor = element;
    }
  }
  console.log('Array input: '+array, '\nBiggest: '+mayor);
}

mayorNumero(ages);
console.log("\n||-----------------------------------||");
console.log('Excercise: ');

function valorDeArray(array, index) {
  console.log(array[index]);
}
valorDeArray(ages, 4);
console.log("\n||-----------------------------------||");
console.log('Excercise: Write a function which receives an array and only prints the values that repeat.');
// EJERCICIO 6: MOSTRAR LOS NUMEROS REPETIDOS DENTRO DE UN ARRAY
function repetidos(array) {
  var objeto = {};
  var repetidos = [];
  // Por cada item dentro del array, pasarlo como un atributo (o key) con su correspondiente valor.
  array.forEach(item => {
    if (!objeto[item]) {
      objeto[item] = 0;
    }
    objeto[item] += 1;
  })
  for (var key in objeto) {
    if (objeto[key] > 1) {
      repetidos.push(key);
    }
  }
  return repetidos; 
}
console.log(repetidos(ages));

console.log("\n||-----------------------------------||");
console.log('Excercise: Write a simple JavaScript function to join all elements of the following array into a string.');
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(', '));

console.log("\n||-----------------------------------||");
console.log('Excercise: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.');
var string1 = "34423";
function reverse(string) {
  array = string.split('');
  var reverse = [];
  for (i = array.length; i > -1; i--) {
    reverse.push(array[i]);
  }
  return reverse.join('');
}
console.log(string1);
console.log(reverse(string1));

console.log("\n||-----------------------------------||");
console.log('Excercise: Write a JavaScript function that returns a string in alphabetical order. For example, if x = \'webmaster\' then the output should be \'abeemrstw\'.  Punctuation and numbers aren\'t passed in the string.');
var string2 = "webmaster";
function alphabetical(string) {
  array = string.split('');
  return array.sort().join('');
}
console.log(alphabetical(string2));

console.log("\n||-----------------------------------||");
console.log('Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".');
var string3 = "prince of persia";
function mayuscula(string) {
  resultado = string.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  return resultado;
}
console.log(mayuscula(string3));

console.log("\n||-----------------------------------||");
console.log('Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".');
var string4 = "Web development program";
function palabraLarga(string) {
  var str = string.split(' ');
  var largo = 0;
  var palabra;
  for (var index = 0; index < str.length; index++) {
    if (largo < str[index].length) {
      largo = str[index].length;
      palabra = str[index];
    }
  }
  return palabra;
}
console.log(palabraLarga(string4));
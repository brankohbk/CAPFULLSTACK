console.log("Starting with JS");
console.log("Exercise separator -----------------------------------||");

let myName = "Branko Haberkon";
console.log("Exercise separator -----------------------------------||");

console.log(myName);
console.log("Exercise separator -----------------------------------||");

let age = 31;
console.log(age);
console.log("Exercise separator -----------------------------------||");

ignasiAge = 32
ageDiff = age - ignasiAge;
console.log(ageDiff);
if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");

}
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
let names = ["David", "Matias", "Branko", "Agus", "Andrea Briceño", "Carla Ribeiro", "catherinesofio", "Claudio Pera", "Diego Weinmann", "Antonellapasserini", "Camijeticas", "Camila G", "Fabiana S", "Gemny", "Gastón Gonzalez", "jesica", "Josefina Sofio", "JoseTT", "Kevin", "Laura Dancoso", "Leo", "Maria Berenice", "Mariana Martinez", "Martha Barzola", "Mauriciojrojas", "Miguelangel", "Nicolás Higa", "Silvia", "sol34", "Valeria Fernandez", "yenifer brito"];
names.sort(function(x, y) {
  return x.localeCompare(y);
})
console.log(names);
console.log("Exercise separator -----------------------------------||");

// console.table(names);
console.log(names[0]);
console.log("Exercise separator -----------------------------------||");

console.log(names[names.length - 1]);
console.log("Exercise separator -----------------------------------||");

// names.forEach(element => {
//   console.log(element);
// });
for (let index = 0; index < names.length; index++) {
  let element = names[index];
  console.log(element);
}
console.log("Exercise separator -----------------------------------||");

let ages = [31, 23, 22, 21, 33, 34, 48, 32, 36, 32, 27, 29, 25, 43, 23, 20, 30, 27, 28, 25, 24, 23, 29, 32, 21, 32, 33, 34, 31, 29, 31, 30];

var indexWhile = 0;
while (indexWhile < ages.length) {
  let element = ages[indexWhile];
  if (element % 2 == 0) {

    console.log(element);
  }
  indexWhile++;
}

console.log("Exercise separator -----------------------------------||");

for (let index = 0; index < ages.length; index++) {
  const element = ages[index];
  if (element % 2 == 0) {

    console.log(element);
  }
}
console.log("Exercise separator -----------------------------------||");

function menorNumero(array) {
  var menor = 10000;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element < menor) {
      var menor = element;
    }
  }
  console.log(menor);
}

menorNumero(ages);
console.log("Exercise separator -----------------------------------||");

function mayorNumero(array) {
  var mayor = 0;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element > mayor) {
      var mayor = element;
    }
  }
  console.log(mayor);
}

mayorNumero(ages);
console.log("Exercise separator -----------------------------------||");

function valorDeArray(array, index) {
  console.log(array[index]);
}
valorDeArray(ages, 4);
console.log("Exercise separator ---------EJERCICIO 6: MOSTRAR LOS NUMEROS REPETIDOS DENTRO DE UN ARRAY---------||");
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

  for (var atributo in objeto) {
    if (objeto[atributo] > 1) {
      repetidos.push(atributo);
    }
  }

  return repetidos;

}

console.log(repetidos(ages));


console.log("Exercise separator -----------------------------------||");
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(', '));
console.log("Exercise separator -----------------------------------||");
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
console.log("Exercise separator -----------------------------------||");
var string2 = "webmaster";

function alphabetical(string) {
  array = string.split('');
  return array.sort().join('');
}
console.log(alphabetical(string2));
console.log("Exercise separator -----------------------------------||");
var string3 = "prince of persia";

function mayuscula(string) {
  resultado = string.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');

  return resultado;
}
console.log(mayuscula(string3));
console.log("Exercise separator -----------------------------------||");
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
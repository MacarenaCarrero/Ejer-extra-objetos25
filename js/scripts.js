// 1️⃣ Saludar a través un objeto con nombre y ciudad; luego mostrar un mensaje de bienvenida en español.

// Ejemplo entrada: {
//  name: "Camila",
//  city: "San Francisco"
//  }

//  Ejemplo salida: "Hola Camila, has llegado a San Francisco."

const greetingWelcome = user => {
  console.log(`Hola ${user.name}, has llegado a ${user.city}.`);
};
greetingWelcome({
  name: 'Camila',
  city: 'San Francisco'
});

// 2️⃣ Verificar la mayoría de edad.

// Ejemplo de entrada:
// verificateUser({
// name: "Abby",
// age: 17
// });

// Ejemplo de salida:"Abby es menor de edad" o "Abby es mayor de edad"

const verifyAge = user => {
  if (user.age >= 18) {
    console.log(`${user.name} es mayor de edad.`);
  } else {
    console.log(`${user.name} es menor de edad`);
  }
};
verifyAge({
  name: 'Abby',
  age: 17
});

// 3️⃣ Macarena y los promedios:
// Array de objetos student con name y grades (array de números). Calcular y mostrar el promedio.

// Ejemplo de entrada: calculateStudentAverage(
// [{
// name: "Bego",
// grades: [8, 9, 10]
// },
// {
// name: "Abby",
// grades: [8, 9, 10]
// }
// ]);

// Ejemplo de salida:
// "El promedio de Bego es 9"
// "El promedio de Abby es 9"

const calculateStudentAverage = students => {
  students.forEach(student => {
    const result = student.grades.reduce((acc, grades) => {
      return acc + grades;
    });
    const calculate = result / 3;
    console.log(`El promedio de ${student.name} es de ${calculate}.`);
  });
};

calculateStudentAverage([
  {
    name: 'Bego',
    grades: [8, 9, 10]
  },
  {
    name: 'Abby',
    grades: [8, 9, 10]
  }
]);

// 4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto con:

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con dos arrays: números pares e impares.

// Ejemplo de entrada: classifyNumbers({numbers: [1, 2, 3, 4, 5, 6]});

// Ejemplo de salida: {result: { even: [2, 4, 6], odd: [1, 3, 5] }}

const classifyNumbers = info => {
  let even = [];
  let odd = [];
  info.numbers.forEach(number => {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  });
  console.log(`Result: { even: [${even}] odd: [${odd}]}`);
};
classifyNumbers({ numbers: [1, 2, 3, 4, 5, 6] });

// 5️⃣ Camila y la clasificación de edades:

// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.

// Ejemplo de entrada: classifyAges({ages: [5, 12, 15, 19, 32, 7, 17]});

// Ejemplo de salida:{ result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }}

const classifyAges = info => {
  const people = {
    children: [],
    teens: [],
    adults: []
  };

  info.ages.forEach(number => {
    if (number <= 14) {
      people.children.push(number);
    } else if (number > 14 && number < 18) {
      people.teens.push(number);
    } else {
      people.adults.push(number);
    }
  });
  console.log(people);
};
classifyAges({ ages: [5, 12, 15, 19, 32, 7, 17] });

// 6️⃣ Cambiar el estado de un semáforo. Objeto con state, elije uno de los tres ("red", "yellow", "green"). Pasar de red a green, luego a yellow, y de yellow a red, cíclicamente.

// Ejemplo de entrada: changeTrafficLight({state: 'red'});
// Ejemplo de salida: "El semáforo cambió a yellow"

// Actualizar la propiedad state según el color actual y mostrar: "El semáforo cambió a ..."

// const changeTrafficLight = info => {
//   if (info.state === red) {
//     console.log(info.state === green);
//   } else if (info.state === yellow) {
//     console.log(info.state === red);
//   }
// };

// changeTrafficLight({ state: 'red' });

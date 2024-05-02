let student = {
  name: "Carmen",
  age: 14,
  grade: 10,
  courses: ["biology", "algebra", "composition", "ceramics"],
  gpa: 3.75,
};

// console.log(student.courses);
// console.log("bracket", student["courses"]);
// console.log("what", student.locker);

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  greet: function (fName) {
    console.log(`Hey, ${fName}!`);
  },
};

// console.log(jane.location.country);
// jane.greet("Bennie");

let fido = {
  name: "Fido",
  species: "Labrador Retriever",
  color: "brown",
  weight: 16,
};

fido.age = 9;
fido["favorite food"] = "bacon";

// console.log(fido.age);

// let ocean = {};
// let prefix = "Indian";

// ocean.prefix = "Pacific";

// console.log(ocean); // {prefix:"Pacific"}

let ocean = {};
let prefix = "Indian";

// ocean[prefix] = "Pacific";
ocean["prefix"] = "South China Sea";

// console.log(ocean); //{Indian: Pacific}
// console.log(ocean); //{ prefix: 'South China Sea' }

let vehicle = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
};

const vehicleProps = Object.keys(vehicle);
// console.log(vehicleProps);

// let person = {
//   title: "Duke",
//   name: "Nukem",
//   age: 33,
// };

// console.log(Object.entries(person));

// Expected output:
let nestedPerson = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

// console.log(Object.fromEntries(nestedPerson));

function clone(obj) {
  // return { ...obj };
  return Object.assign({}, obj);
}

let person = {
  title: "Duke",
  name: {
    value: "Nukem",
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false

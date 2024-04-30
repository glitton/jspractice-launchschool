function first(arr) {
  return arr[0];
}

// console.log(first([]));

function last(arr) {
  return arr[arr.length - 1];
}

// console.log(last(["Earth", "Moon", "Mars"]));

let energy = ["fossil", "solar", "wind", "tidal", "fusion"];
// energy.shift();
// energy = energy.slice(1);
energy.splice(0, 1);
energy.push("geothermal");
// console.log(energy);

let alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabet.split(""));
// console.log(Array.from(alphabet));

let scores = [96, 47, 113, 89, 100, 102];

function greaterThan(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= value) {
      count += 1;
    }
  }
  return count;
}

// console.log(greaterThan(scores, 100));

let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

for (let vocabIdx = 0; vocabIdx < vocabulary.length; vocabIdx++) {
  let synonmys = vocabulary[vocabIdx];
  for (let synonymIdx = 0; synonymIdx < synonmys.length; synonymIdx++) {
    // console.log(synonmys[synonymIdx]);
  }
}

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

// console.log(array1 === array2); //Arrays are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, i.e. whether they reference the same location in memory. Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

function containsItem(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

// console.log(containsItem("Nashville", destinations));

function contains(element, list) {
  return list.indexOf(element) >= 0;
}

let passcode = ["11", "jZ5", "hQ3f*", "8!7g3", "p3Fs"];
let newPasscode = "";
let finalPasscode = "";

function generatePasscode(array, element) {
  for (let i = 0; i < array.length - 1; i++) {
    newPasscode = array[i] + element;
    finalPasscode += newPasscode;
  }
  return finalPasscode + array[array.length - 1];
}

// console.log(generatePasscode(passcode, "-"));

// console.log(passcode.join("-"));

let joinedPasscode = "";

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += "-";
  }

  joinedPasscode += passcode[i];
}

// console.log(joinedPasscode);

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();
  console.log(checkedItem);
}

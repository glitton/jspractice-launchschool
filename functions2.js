function greet(greet = "Hello", recepient = "world!") {
  console.log(`${greet}, ${recepient}`);
}

// greet("Salutations", "bennie"); // logs: Salutations, world!

// greet();

function greeting() {
  return "Good morning";
}

function recipient() {
  return "Launch School";
}

// console.log(greeting() + ", " + recipient() + "!");
// console.log(`${greeting()}, ${recipient()}!`);

function calculateBMI(height, weight) {
  const heigntInMeters = height / 100;
  const bmi = weight / heigntInMeters ** 2;
  console.log(bmi.toFixed(2));
}

// calculateBMI(180, 80); // "24.69"

function catAge(humanYears) {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

// console.log(removeLastChar("Bennieo"));

const template = "I VERB NOUN.";

// function sentence(verb, noun) {
//   return template.replace("VERB", verb).replace("NOUN", noun);
// }

const sentence = (verb, noun) =>
  template.replace("VERB", verb).replace("NOUN", noun);

// console.log(sentence("like", "birds"));

// let initGame = function () {
//   return {
//     level: 1,
//     score: 0,
//   };
// };

let initGame = () => ({
  level: 1,
  score: 0,
});

let game = initGame();

console.log("Level: " + game.level);
console.log("Score: " + game.score);

const str = "These aren't the droids you're looking for.";
// console.log(str.length);

const str2 = "confetti floating everywhere";
// console.log(str2.toUpperCase());

// function repeat(num, str) {
//   let word = "";
//   for (let i = 0; i < num; i++) {
//     word += str;
//   }
//   return word;
// }

function repeat(num, str) {
  let word = "";
  while (num > 0) {
    word += str;
    num -= 1;
  }
  return word;
}

// console.log(repeat(3, "ha"));

const rhyme = "A pirate I was meant to be!\nTrim the sails and roam the sea!";

console.log(rhyme);

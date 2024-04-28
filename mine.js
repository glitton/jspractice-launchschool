let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === null) {
//     continue;
//   }
//   console.log(cities[i].length);
// }

// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }

// function odds(num) {
//   let i = 1;
//   while (i < num) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//     i += 1;
//   }
// }

// function odds(num) {
//   let i = 1;
//   while (i < num) {
//     console.log(i);
//     i += 2;
//   }
// }

// odds(40);
let fish = ["Dory", "Marlin", "Gill", "Nemo", "Bruce"];

function findNemo(arr) {
  for (const el of arr) {
    if (el === "Nemo") {
      break;
    }
    console.log(el);
  }
}

findNemo(fish);

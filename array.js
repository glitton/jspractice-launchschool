function first(arr) {
  return arr[0];
}

// console.log(first([]));

function last(arr) {
  return arr[arr.length - 1];
}

// console.log(last(["Earth", "Moon", "Mars"]));

let energy = ["fossil", "solar", "wind", "tidal", "fusion"];
const newEnergy = energy.slice(1);
newEnergy.push("geothermal");
console.log(newEnergy);

// const name = "bennie";
// const firstLetter = name.charAt(0);
// const restOfWord = name.slice(1);

// console.log(`${firstLetter.toUpperCase()}${restOfWord}`);

// function caplitalizeFirstLetter(word) {
//   const firstLetterCapitalize = word.charAt(0).toUpperCase();
//   const restOfWord = word.slice(1);

//   console.log(`${firstLetterCapitalize}${restOfWord}`);
// }

// caplitalizeFirstLetter("leslie");

// function findElementInArray(arr, condition) {
//   const foundElement = arr.find((el) => el === condition);
//   console.log(foundElement);
// }

// findElementInArray(["fish", "and", "chips"], "and");

// const findLargestNumber = (...nums) => {
//   console.log(Math.max(...nums));
// };

// findLargestNumber(10, 78, 20, 5, 200, 55, 98, 354);

function greet(languageCode) {
  switch (languageCode) {
    case "en":
      return "Hi!";
    case "fr":
      return "Salut!";
    case "pt":
      return "Olá!";
    case "de":
      return "Hallo!";
    case "sv":
      return "Hej!";
    case "af":
      return "Haai!";
  }
}

function extractLanguage(languageCode) {
  const language = languageCode.substr(0, 2);
  return language;
}

// extractLanguage("en_US.UTF-8");

function localGreet(languageCode) {
  const language = extractLanguage(languageCode);
  const greeting = greet(language);
  console.log(greeting);
}

localGreet("en_AU.UTF-8");

console.log("Hello world!");

let number = 1;
console.log(number);

let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;
console.log(sweets);

let myName = "Bob";
console.log(myName);

let firstName = "Bob";
let lastName = "Smith";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let secondName = "Imhotep";
console.log(`${secondName} is ${secondName.length} characters long`);

let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);

let mySecondName = "Bob";
console.log(typeof mySecondName);
let secondNumber = 1;
console.log("The type of number is " + typeof secondNumber);
let isVeryTrue = true;
console.log(`The type of isTrue is ${typeof isVeryTrue}`);

let someName;
console.log(someName);

let age = null;
console.log(age);

let a = 8;
let b = 6;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
console.log(`Is ${a} less than ${b}?`, isALessThanB);
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);

let favouriteProgrammingLanguage = "JavaScript";
let currentCourseDay = 4;
/*
const sentence = `My favourite programming language is ${favouriteProgrammingLanguage}. We're on day ${currentCourseDay} of the course.`;
console.log(sentence);
*/
const sentence =
  "My favourite programming language is " +
  favouriteProgrammingLanguage +
  ". We're on day " +
  currentCourseDay.toString() +
  " of the course.";

console.log(sentence);

// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
function greaterNum(firstNum, secondNum) {
  if (firstNum > secondNum){
    console.log(firstNum);
  } else if (secondNum > firstNum) {
    console.log(secondNum);
  }
}

greaterNum(1,2);
greaterNum(2,1);

// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


// EXERCISE: The World Translator

function helloWorld(language) {
  if (language == "es") {
    console.log("Hola");
  } else if (language == "de"){
    console.log("Guttentag");
  } else if (language == "en"){
    console.log("Hello, World");
  }
}

helloWorld("es");
helloWorld("de");
helloWorld("en");
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
function assignGrade(numberScore) {
  if (numberScore >= 90) {
    console.log("A");
  } else if (numberScore >= 80 && numberScore <= 90){
    console.log("B");
  } else if (numberScore >= 70 && numberScore <= 80){
    console.log("C");
  } else if (numberScore >= 60 && numberScore <= 50){
    console.log("D");
  } else if (numberScore <= 50){
    console.log("F")
  }
}
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

assignGrade(88);
assignGrade(45);
assignGrade(32);
assignGrade(70);
assignGrade(90);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:

function pluralize(noun, number) {
  if (number == 1) {
    console.log(number + " " + noun);
  } else if (number >= 1) {
    console.log(number + " " + noun +'s');
  } else if (number >= 1 && noun == "sheep") {
    console.log(number + " " + noun);
  } else if (number >= 1 && noun == "goose") {
    console.log(number + "geese");
  }
}
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
pluralize("dog", 1);
pluralize("goose", 1);
pluralize("cat", 5);
pluralize("goose", 2);


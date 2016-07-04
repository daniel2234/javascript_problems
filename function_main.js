// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
  console.log("You will be a "+jobTitle+" in "+geographicLocation+", and married to "+partnerName+" with "+numberOfChildren+" kids.")
}
tellFortune("Developer", "Canada", "Emily Ratjowski", 3);
tellFortune("JavaScript Developer", "Canada", "Esmaralda", 3);
tellFortune("Angular Developer", "Canada", "Kristy", 3);
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in
function calculateAge(birthYear) {
  var currentYear = new Date().getFullYear()
  console.log("You are either "+(currentYear- birthYear)+" or "+(birthYear - currentYear)+".");
}
calculateAge(1993);
calculateAge(1989);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var totalNeeded = (amountPerDay * 365) * (maxAge - age);
  var message =  "You will need "+totalNeeded+" to last you until the ripe old age of "+maxAge;
  console.log(message);
}
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.



// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:

function calcCircumfrence(radius) {
  var message = 'The circumference is ' +(2*3.14*radius);
  console.log(message);
}
// Create a function called calcArea:

function calcArea(radius) {
  var message = 'The area is ' + (3.14*(radius ^ 2));
  console.log(message)
}

calcCircumfrence(50);
calcArea(20);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
function celsiusToFahrenheit(temperature) {
  var celsius = temperature;
  var message = celsius+ '°C is '+((celsius * 1.8) + 32)+'°F.';
  console.log(message);
}
celsiusToFahrenheit(22);

// Create a function called fahrenheitToCelsius:

function fahrenheitToCelsius(temperature) {
  var fahrenheit = temperature;
  var message = fahrenheit+'°F is '+((fahrenheit - 32) * .5556)+'°C.'
  console.log(message);
}
fahrenheitToCelsius(71.6);
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
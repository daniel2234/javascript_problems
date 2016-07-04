// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = 'Developer';
var geographicLocation = 'Canada';
var partnerName = 'Emily Ratjowski';
var numberOfChildren = 3;


console.log("You will be a "+jobTitle+" in "+geographicLocation+", and married to "+partnerName+" with "+numberOfChildren+" kids.")


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var currentYear = 2016
// Store their birth year in a variable.
var birthYear = 1989
// Calculate their age based on the stored values.
console.log("They are "+(currentYear - birthYear)+" years old.")
// Output them to the screen like so: "They are NN years old.", substituting the values.


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
var currentAge = 27
// Store a maximum age into a variable.
var maximumAge = 30
// Store an estimated amount per day (as a number).
var estimatedAmount = 7
// Calculate how many you would eat total for the rest of your life.
var totalAmount = ((maximumAge - currentAge) * 7)
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
console.log("You will need " +totalAmount+ " to last you until the ripe old age of " + maximumAge)


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 50
// Calculate the circumference based on the radius, and output "The circumference is NN".
var circumference = (2 * 3.14) * radius
console.log("The circumference is " +circumference+".");
// Calculate the area based on the radius, and output "The area is NN".
console.log("The area is "+(3.14*(radius ^ 2))+".");

// EXERCISE: The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
var celsius = 22
// Convert it to fahrenheit and output "NN°C is NN°F".
console.log(celsius+"C is "+((celsius * 1.8) + 32)+"F.");
// Now store a fahrenheit temperature into a variable.

var fahrenheit = 71.6
// Convert it to celsius and output "NN°F is NN°C."
console.log(fahrenheit+ "F is "+((fahrenheit - 32) * .5556)+ "C.");
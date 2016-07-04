// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!


// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// and ingredients (an array of strings).
// On separate lines (one console.log statement for each), 
// log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var recipe = {
  title : "Paleo Buns",
  servings : 2,
  ingredients : ["cinnamon", "cumin", "cocoa"]
}
console.log("This recipe for "+recipe.title+" is for "+recipe.servings+" people");

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, 
// where each object describes a book and has properties for the title (a string), 
// author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending
 // on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var book = {
  title : "The Art Of War",
  author : "Sun Tzu",
  alreadyRead : false
}

var arrayOfBooks = [
  {title : "The Art Of War",
  author : "Sun Tzu",
  alreadyRead : false},
  {title : "The Last Wish",
  author : "Andrzej Sapkowski",
  alreadyRead : false},
  {title : "The Lord of The Rings",
  author : "J.R.R Tolkien",
  alreadyRead : false},
  {title : "The Age of Spiritual Machines",
  author : "Ray Kurzweil",
  alreadyRead : false},
  {title : "American Psycho",
  author : "Bret Easton Ellis",
  alreadyRead : true}
];


for (var i = 0; i < arrayOfBooks.length; i++) {
  console.log(arrayOfBooks[i].title+ " by "+ arrayOfBooks[i].author);
  if (arrayOfBooks[i].alreadyRead == true) {
    console.log("You already "+arrayOfBooks[i].title+ " by " +arrayOfBooks[i].author);
  } else if ( arrayOfBooks[i].alreadyRead == false){
    console.log("You still need to read " +arrayOfBooks[i].title+ " by " + arrayOfBooks[i].author);
  }
}

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

var movie = { title : "The Dark Knight", duration: 200, stars:["Bale", " Ledger", " Eckhart"]}
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
function printMovieInfo(movieObject) {
  console.log(movieObject.title + " lasts for " +movieObject.duration+ " minutes. Stars:" +movieObject.stars );
}

printMovieInfo(movie);
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."




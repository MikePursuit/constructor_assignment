console.log(`# Constructor Exercises`);

//## Question 1
console.log(`\n\n\n\n========================================\n## Question 1\n===============`);
console.log(`\n
a.
Write a constructor function called 'Person' that has 3 properties: a first name, a last name and a middle name.
Create 2 instances of a 'Person'.
Print one of their first names.


b.
Write a prototype function in 'Person' called 'fullName' that will return a formatted string of an instance's full name.
Call this method on both the instances you created in part a.

\n----------------------------------------\n\n`);

function Person(firstName, middleName, lastName) {
  this.firstName = firstName
  this.middleName = middleName
  this.lastName = lastName
}

let mike = new Person(`Michael`, `David`, `Amparo`)
let karina = new Person(`Karina`, `Idalia`, `Medina`)

console.log(mike.firstName);

Person.prototype.fullName = function() {return `${this.firstName} ${this.middleName} ${this.lastName}`}

console.log(mike.fullName());
console.log(karina.fullName());

//## Question 2
console.log(`\n\n\n\n========================================\n## Question 2\n===============`);
console.log(`\n
a.
Create a constructor function called 'Book' that has properties 'title', 'author' and 'rating'.
Create some instances of 'Book'.


b.
Add a prototype function to 'Book' called 'isGood' that returns 'true' if its rating is greater than or equal to 7

\n----------------------------------------\n\n`);

function Book(title, author, rating) {
  this.title = title
  this.author = author
  this.rating = rating
}

let harryPotter = new Book(`Harry Potter`, `J.K. Rowling`, 10)

console.log(harryPotter);

Book.prototype.isGood = function () {return this.rating >= 7};

console.log(harryPotter.isGood());

//## Question 3
console.log(`\n\n\n\n========================================\n## Question 3\n===============`);
console.log(`\n
a.
Create a 'Dog' constructor function with four properties: 'name (string), breed (string), mood (string), and hungry (boolean)'.

b.
Add a prototype function called 'playFetch'.
It should set the dog's 'hungry' property to 'true', set its mood property to 'playful', and log "Ruff!"

c.
Add a prototype function called 'feed'.
If the dog is hungry, it should set 'hungry' to 'false' and print "Woof!".
If the dog is not hungry, it should log "The dog doesn't look hungry".

d.
Add a prototype function called 'toString' that returns a description of the dog:

\n----------------------------------------\n\n`);

function Dog(name, breed, mood, hungry) {
  this.name = name
  this.breed = breed
  this.mood = mood
  this.hungry = hungry
}
let mikey = new Dog(`Mikey`, `Frenchie`, `happy`, true)

console.log(mikey);

Dog.prototype.playFetch = function () {
  this.hungry = true
  this.mood = `playful`
  console.log(`Ruff!`);
};

mikey.playFetch()
console.log(mikey.mood);

Dog.prototype.feed = function () {
  if (this.hungry) {
    this.hungry = false
    console.log(`Woof!`);
  } else console.log(`The dog doesn't look hungry.`);
};

mikey.feed()
console.log(mikey.hungry);

Dog.prototype.toString = function () {
  return `${this.name} is a ${this.breed} and right now it's feeling ${this.hungry ? `` : `not `}hungry and ${this.mood}`
};

console.log(mikey.toString());

//## Question 4
console.log(`\n\n\n\n========================================\n## Question 4\n===============`);
console.log(`\n
There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

C = (F - 32) / 1.8
F = 1.8 * C + 32
K = C + 273

a. Make an object called 'freezingPoint' that has three properties: 'celsius', 'fahrenheit', and 'kelvin'. Give them all values equal to the freezing point of water.


b. Make a constructor function called 'Celsius' that has one property: 'celsius', and two methods 'getFahrenheitTemp', and 'getKelvinTemp'.

'''js
let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0
'''

c. Give 'Celsius' a prototype function called 'isBelowFreezing' that returns a 'Bool' (true if the temperature is below freezing).

\n----------------------------------------\n\n`);

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273,
}

console.log(freezingPoint);

function Celsius(celsius) {
  this.celsius = celsius
  this.getFahrenheitTemp = function() {return 1.8 * this.celsius + 32}
  this.getKelvinTemp = function() {return this.celsius + 273}
}

let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius); //returns 10.0
console.log(outsideTempt.getKelvinTemp()); //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()); //returns 50.0

Celsius.prototype.isBelowFreezing = function () {return this.celsius < freezingPoint.celsius};

console.log(outsideTempt.isBelowFreezing());

//## Question 5
console.log(`\n\n\n\n========================================\n## Question 5\n===============`);
console.log(`\n
a.
Create a constructor function called 'Movie' that has properties for 'name', 'year', 'genre', 'cast', and 'description'.
Create an instance of your 'Movie'

b.
Create an prototype function inside 'Movie' called 'blurb' that returns a formatted string describing the movie.

Ex: "Borat came out in 2006.
It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

\n----------------------------------------\n\n`);

function Movie(name, year, genre, cast, description) {
  this.name = name
  this.year = year
  this.genre = genre
  this.cast = cast
  this.description = description
}

let pulpFuction = new Movie(`Pulp Fiction`, 1994, `Crime Drama`,
  {SamuelLJackson: `Jules`, JohnTravolta: `Vincent Vega`, UmaTherman: `Mia Wallace`},
  `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`)

Movie.prototype.blurb = function () {return `${this.name} came out in ${this.year}.\n${this.description}`};

console.log(pulpFuction);
console.log(pulpFuction.blurb());

//## Question 6
console.log(`\n\n\n\n========================================\n## Question 6\n===============`);
console.log(`\n
Write a constructor Vector that represents a vector in two-dimensional space.
It takes two number arguments: 'x' and 'y' parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, 'plus' and 'minus', that take another vector as an argument and
returns a new vector that has the sum or difference of the two vectors’ (the one in 'this' and the parameter) x and y values.

Add a method 'getLength' to the prototype that computes the length of the vector ;
that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

'''js
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5
'''

\n----------------------------------------\n\n`);

function Vector(x, y) {
  this.x = x
  this.y = y
}

Vector.prototype.plus = function (vector) {return { x: (this.x + vector.x), y: (this.y + vector.y),}};
Vector.prototype.minus = function (vector) {return { x: (this.x - vector.x), y: (this.y - vector.y),}};
Vector.prototype.getLength = function () {return Math.pow(this.x * this.x + this.y * this.y, 1 / 2)};

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5

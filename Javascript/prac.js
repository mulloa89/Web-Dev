//Individual exercises are commented off in blocks
//uncomment block you want to use

/* 

//JS Stalker Exercise
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

console.log("Your full name is " + firstName + " " + lastName);
console.log("You are " + age + " years old"); 

*/

/* 

//Age Calculator
//Enter your age and find out how many day's you've been alive
var age = prompt("What is your age?");

var days = age * 365.25;
alert(age + " years is roughly " + days + " days.");

 */

//GUESSING GAME
//create secretNumber
var secretNumber = 4;

//ask user for guest
var stringGuess = prompt("Guess a number?");
var guess = Number(stringGuess);

//check if guess is correct
if (Number(guess) === secretNumber) {
  alert("YOU GOT IT RIGHT!");
} else if (Number(guess) > secretNumber) {
  //check if guess is higher
  alert("Too high. Guess again!");
} else {
  //otherwise, check if lower
  alert("Too low. Guess again!");
}

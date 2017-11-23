//Variables are simply containers that store values
//They follow this pattern
var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name; //"hello there Rusty"

var num = 37;
num + 3 + 10; //50

//We can also update existing variables
var name = "Robert";
name = "Bob";

//Variables that are declared but not initialized are undefined
//The following variables are undefined:
var name;
var age;

//null is "explicitly nothing"
var currentPlayer = "Charlie";
currentPlayer = null; //game over

//code examples
var userName = prompt("What is your name?");
alert("Nice to meet you, " + userName);
console.log("Also great to meet you, ") + userName;

//JS Stalker Exercise
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

console.log("Your full name is " + firstName + " " + lastName);
console.log("You are " + age + " years old");

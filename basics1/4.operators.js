// Arithmetic Operators
// 5+5
// console.log(10/3)
// 4-3
// 10/2
// 10%3

// Concatenation - Joins Strings
const numOne = "1"
const numTwo = "2"
const numThree = numOne + numTwo
console.log(numThree)

// Another Example

const fname = "Lambit "
const lname = "Dohotia"
let fullname = fname + lname//we can declare fullname as const as well
console.log(fullname)

// 2 raised to the power of 3 is written as 2**3
console.log(2**3)


// Increment Operator value1++ means value1 = value1 + 1. use mostly value++ instead of ++value
let value1 = 5
value1++ 
console.log(value1++)

//Assignment operator
let value2 = 3 //we are assigning the value 3 into the variable value2
value2 += 10 //whatever the existing value of value2 is just add 10 to it. i.e. we get value2 = 13
 console.log(value2)

let text1 = "What a very ";
text1 += "nice day";
console.log(text1)
//  Similarly there are -=, -=, =/ **=



// Comparison Operator

let pw = 3
let pwskills = 3
// basically pw == pwskills is like asking "Is pw = pwskills true?"
console.log(pw  == pwskills) //True is the output
console.log(pw == 10)
// Magic
console.log(3 == "3") //It says true because == compares only the value and not the data i.e. the data type is ignored

// === is a comparison operator that checks the equality of two values as well as the data type. 

console.log(3 === "3") //Since data types are different so it returns false

console.log(3 != 4) //Not Equal == operator. Here Output will be true 

//
console.log(2 + "2")
console.log("2" + 2)
//
console.log("Hello" + "2")
console.log("World" + 2)

let num1 = 5
let num2 = 11
console.log("num1 + num2 = ", num1+num2)
console.log("5 + 11 = ", num1+num2)

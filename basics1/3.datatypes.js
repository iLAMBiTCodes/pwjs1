// There are two types of datatypes in the world of Javascript
// Primitive (STACK)
/*
    String
    Number 
    boolean 
    Null 
    undefined 
    Symbol (unique)
    BigInt
    // Null and undefined are like empty.
 */
//  Lets suppose we are building a weather app, the temp 0 is not empty but the if we cannot derieve temp from the server it is empty
// String - Anything written inside double quotes are strings. You can add number as well. i.e 22 is a number but "22" is a string
const firstname = "Lambit"
// Number
const age = 21
let score = 200.99
// Boolean
let userloggedin = true
// Null
const nodeversion = null
// undefined
let bankbalance = undefined
// symbol
const buttonid = Symbol("ID")
// Bigint
const longnumber = 89795734895




// Reference or Non Primitive or Objects (HEAP)

/*
Arrays
Objects
Functions
*/

// Array - How to declare it?? []. here Order matters
const numbers = [1,2,3,4,5]
const heros = ["Batman", "Superman", "Spiderman"]
// Obejects  - Declaration {} - Order doesn't matter. we can add references like name age, isloggedin, etc
const userObject = {
    name: "Lambit",
    age: 20,
    isLoggedIn: true
}

let anotherUser = userObject
// Here any changes made in the values of userObejct will also change anotherUsers

// How to declare an empty Array and object
const sayhello = []
let saybye = {}
// and similar for object. in the above examples we've used const data type but it doesn't matter you can use var/let as well


// Functions - How to declare. Syntax is shown below
const hello = function(){
    // Entire Code Functionality here. Function briings functionality to the code
}

const helloworld = function(){
    console.log("Hello World")
}
const registerUser = function(){
    
}

// STACK &  HEAP are kind of memories
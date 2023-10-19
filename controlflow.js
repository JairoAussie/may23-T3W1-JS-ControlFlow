// console.log("Welcome to a new lesson 😀")
// console.log("Hi again")

// if ( true )  {
//     console.log("We are in the if statement")
// }

// if ( 1 && 8 ) {
//     console.log("We are in the if statement (false) ")
//     console.log(1 && 8)
// }

// let someValue = 10

// if (someValue < 10 ) {
//     console.log("Less than 10")
// } else if ( someValue > 10) {
//     console.log ("Greater than 10")
// } else {
//     console.log("The number is 10")
// }

// let choice = prompt("What is your favorite colour?")

// switch (choice) {
//     case "blue":
//         alert("No way!, that's the colour of the sky!")
//         break;
//     case "red":
//         alert("that's a speedy colour!")
//         break;
//     case "yellow":
//         alert("No way!, that's the colour of the sun")
//         break;
//     default:
//         alert("... that doesn't seem like a cool colour")
//         break;
// }

// let someNumber = 6

// console.log( someNumber === 5 ? "Yes!" : "No!")

// let loggedInUser = false

// console.log( loggedInUser ? "Show the My profile button" : "Show Log in button")

// let shortCircuit = 8 && 90 

// if ( shortCircuit ) {
//     console.log("the condition was true")
//     console.log(shortCircuit)
// } else {
//     console.log("The condition was false")
//     console.log(shortCircuit)

// }

// let data = ""

// let shortCircuit = data || "Loading..."

// if ( shortCircuit ) {
//     console.log("the condition was true")
//     console.log(shortCircuit)
// } else {
//     console.log("The condition was false")
//     console.log(shortCircuit)

// }

let data = null

let shortCircuit = data ?? "Loading..."

if ( shortCircuit ) {
    console.log("the condition was true")
    console.log(shortCircuit)
} else {
    console.log("The condition was false")
    console.log(shortCircuit)

}
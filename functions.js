
// traditional

/**
 * 
 */
function greeter () {
    console.log("Welcome to the lesson");
}

//greeter();

/**
 * 
 * @param {string} customMessage 
 */
// function greeterWithMessage(customMessage){
//     console.log(`Welcome ${customMessage}`);
// }

// /**
//  * 
//  * @param {string} customMessage. Optional custome message 
//  */
// function greeterWithDefault(customMessage = "to the lesson") {
//     console.log(`Welcome ${customMessage}`);
// }

// // greeterWithMessage("to the functions lesson");
// greeterWithDefault();
// greeterWithDefault(", functions lesson is here!");

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns the addition of num1 + num2
 */
// const result = function addition (num1, num2) {
//     // console.log(`the result is ${num1 + num2}`)
//     return num1 + num2;
// }

const basicArrowFunc = someValue => console.log(someValue);

const basicArrowFunc2 = (someValue) => {
    console.log(someValue);
    return someValue;
}
//console.log(addition(4, 17));

// function greeterWithDefault(customMessage = "to the lesson") {
//     console.log(`Welcome ${customMessage}`);
// }


const greeterWithDefault = (customMessage = "to the lesson") => {
    console.log(`Welcome ${customMessage}`);
    return `Welcome ${customMessage}`
}

// functions not executed, just copied around.
//let storedCustomMessage = greeterWithDefault;

// let storedCustomMessage = greeterWithDefault("to the fat arrow world");

// console.log(`The returned value from the ES6 function is ${storedCustomMessage}`);
// greeterWithDefault();
// greeterWithDefault("to the fat arrow functionality")

//IIFE
/**
 * 
 */
// ((num1 = 5, num2 = 12) => {
//     console.log(`${num1 * num2}`);
// })(3,5);


//Callback
// function addition (num1, num2) {
//     console.log(`the result is ${num1 + num2}`)
//     //return num1 + num2;
// }

// function printStuff(value1, value2, callback){
//     console.log(typeof(callback));
//     callback(value1, value2);
// }

// function multiplcation (num1, num2) {
//     console.log(`the result is ${num1 * num2}`)
// }

// function greeter (word1, word2) {
//     console.log(`${word1} ${word2}`)
// }
    

// printStuff(4, 3, addition);
// printStuff(4, 3, multiplcation);
// printStuff("Hello", "World", greeter);

// let array = [1, 4, 7, 9, 10, 14, 16];

// function printArray(item, i, a){
//     console.log(item, i, a[i])
// }
// // // create the anonymous function within the forEach
// // array.forEach((item, i, a) => console.log(item, i, a[i]));

// // // Use printArray function as a callback, 
// // // both of them will executed in each iteration of the array loop
// // array.forEach(printArray);

// const button = document.getElementById("button")

// button.addEventListener("click", () => {
//     console.log("Hey, you actually clicked the button!")
// });


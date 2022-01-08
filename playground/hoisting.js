// Hoisting allows you to access functions and variables before they have been created.

// How? When JavaScript is run, the JavaScript compiler will take you function declarations
// and move them to the top of the file before it executes.

// Because of hoisting, we can run sayHi() before the function declaration and it will still work.
sayHi();

function sayHi() {
    console.log('Hey!');
}


// With variables, JavaScript will hoist the actual declarations but it won't
// hoist the actual value.
// Example below;
console.log(age); // undefined, the var declaration was hoisted but not the value of 100
console.log(cool); // error, not defined
var age = 100;


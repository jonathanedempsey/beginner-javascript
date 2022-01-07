console.log('it works!');

// Global variable
// Accessible from anywhere
const first = 'jonno';


// Function scope
const age = 100; // global
function go() {
    const hair = 'blonde'; // scoped
}

// Age will print out as it's a global variable
console.log(age);
// Hair will return as not defined as it is scoped in the go() function
console.log(hair);


// Block scope
// As a general rule for function and block scope,
// any variable created within two curly brackets cannot be accessed outside of those curly brackets
if ( 1 === 1) {
    const cool = true;
}
console.log(cool); // wont work as cool is block scoped.

// A work around for block scope is to declare the variable outside the block
// and then update that variable within the block.
let cool;
if ( 1 === 1 ) {
    cool = true;
}

console.log(cool); // this works!

// You'd probably want to add the above into a function to avoid the global variable
// Function scope
function isCool(name) {
    let cool;

    // Block scope
    if ( name === 'jonno' ) {
        cool = true;
    }
    console.log(cool);
    return cool;
}

// Example - which dog name gets logged?
// Answer - doug, but why?

// The way scope lookup happens starts where the functions are defined, not where they're run.
const dog = 'doug';

// Even though logDog is run inside of go(), since it's defined here it will pick up the global dog,
// rather than the dog defined in go()
function logDog() {
    console.log(dog)
}

function go() {
    const dog = 'sunny';
    logDog();
}

go();
console.log('it works');

// Named function
// Functions declared using hte function keyword are hoisted,
// meaning the function can be called before or after the function has been declared.
function doctorize(firstName) {
    return `Dr. ${firstName}`;
}

// Anonymous function - a function with no name
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression
// Store a function as a value in a variable.
// Functions declared in a variable are NOT hoisted,
// meaning the function can only be called after the function has been declared
const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
};


// Arrow functions
// Arrow functions are also anonymous
// We'll convert inchToCM from a regular function to an arrow function
// Step 1
function inchToCM(inches) {
    return inches * 2.54;
}

// Step 2
const inchToCM = function(inches) {
    return inches * 2.54;
}

// Step 3
const inchToCM = (inches) => {
    return inches * 2.54;
}

// Step 4
// using the return keywork is explicit but we can remove the return
// keyword to make it implicit, allowing us to return the value with the return keyword
const inchToCM = (inches) => inches * 2.54;

// If there is only 1 argument we can also remove the brackets around the arguments
// const inchToCM = inches => inches * 2.54;

// Arrow function example 2
// Step 1
function add(a, b = 3) {
    const total = a + b;
    return total;
}

// Step 2
const add = function(a, b = 3) {
    return a + b;
}

// Step 3
const add = (a, b = 3) => {
    return a + b;
}

// Step 4
const add = (a, b = 3) => a + b;

// Arrow function gotcha - returning an object
// Step 1
const makeABaby = (first, last) => {
    const baby = {
        first: `${first} ${last}`,
        age: 0
    }

    return baby;
}

// Step 2
const makeABaby = (first, last) => {
    return {
        first: `${first} ${last}`,
        age: 0
    }
}

// Step 3
// Since an object is wrapped in curly braces, we need to place round braces around it
// or else JS will get confused the the objects curly braces are actually the braces for the function block.
// Although this is the best shorthand of the function, it's argueably more difficult to read than Step 1,
// so you'd likely be better sticking with Step 1 for this example.
const makeABaby = (first, last) => ({ first: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression
// We wrap an anon function in round braces and then at the very end,
// we add (); which immediately runs the function.
(function() {
    console.log('Running the Anon function');
    return 'You are cool';
})();

// Example passing a value
(function(age) {
    console.log('Running the Anon function');
    return 'You are cool and age ${age}';
})(10);



// Methods
// A method is a function that lives inside of an object.
// For example, console is an object and .log() is a function within that object

// jonno.sayHi()
const jonno = {
    name: 'Jonno',
    // Method
    sayHi: function() {
        console.log('Hey Jonno!');
        return 'Hey Jonno!';
    },
    // Short hand method
    yellHi() {
        console.log('HEY JONNO!');
    },
    // Arrow function
    whisperHi: () => {
        console.log('hiii jonnoooo');
    }
}


// Callback Functions
// A function that runs when something happens.
// For example, a click event or a timeout event.

// Click callback
const button = document.querySelector('.clickMe');
button.addEventListener('click', jonno.yellHi);

button.addEventListener('click', function() {
    console.log('Clicked!');
});

// Timer Callback
setTimeout(jonno.yellHi, 1000);


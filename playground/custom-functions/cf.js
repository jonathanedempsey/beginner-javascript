// Function Definition
function calculateBill(billAmount, taxRate = 0.13) {
    // this is the function body/block

    console.log('Running Calculate Bill');

    // Scoped variable.
    // This variable is only available within this function
    const total = billAmount * (1 + taxRate);

    // To use total outside of the function we need to use 'return'
    return total;
}


// Function Call
// We can capture the 'total' variable from calculateBill() in a new variable
const myTotal = calculateBill(100, 0.13);

// Since we have a defaulkt value for taxRate, we can just pass in the billAmount for the same result
// const myTotal = calculateBill(100);

console.log(`Your Total is $${myTotal}`);

// Function Definition
function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Jonno');
console.log(greeting);


// In the two functions below, it is okay to reuse the same parameter names
// since the paramater name is scoped and can only be used in that specific function
function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}

// We can also pass functions as arguments in other functions
console.log(yell(doctorize('Jonno')));

// We can set a default value on a function so if no argument is passed,
// it will revert to the default value
console.log(yell())
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
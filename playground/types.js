/**
 * Type - String
 */
const name = 'jonathan'; // single quote
const middle = "edward"; // double quote
const last = `dempsey`; // backtick

// In most cases, it is best to use backticks
const sentenc = "she's so \"cool\""; // okay
const sentence2 = `she's so "cool"`; // much better

// Backticks allow you to multi line strings, however this should not typically be done.
const song = `Ohhh
ya
I like
pizza`;

// Backticks allow for easy interpolation
const hello = "hello my name is " + name + ". Nice to meet you"; // concatenation - okay
const hello2 = `hello my name is ${name}. Nice to meet you.`; // interpolation - much better
const age = `I am ${1 + 100} years old`; // can also run statements, not just variables

// Backticks are also useful for html injection
const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello2}</p>
    </div>
`;
document.body.innerHTML = html;


/**
 * Type - number
 */
const age = 100;
const name = 'jonno';
// in console, typing in "typeof age" or "typeof name" will return what the type of the variables is

// both integers and floats are of type number
const integer = 100; // integer is a full number
const float = 100.5; // float has a decimal

// numbers can be used for mathematics, duh
const a = 10;
const b = 20;
// a + b = 30
// a * b = 200
// a / b = 0.5
// a - b = -10

// Mixing mathematic symbols act a bit funny when mixing types
// 1 + "1" = "11" - the plus sign concatenated the number and string into a string
// "10" * "10" = 100 - multiplying two strings will carry out the equation and convert the results into type of number

// Math functions
const smarties = 20;
const kids = 3;
const eachKidGets = smarties / kids;
console.log(`Each kid gets ${eachKidGets}`); // Each kid gets 6.6666666667

// The above result is too messy, we can use Math.floor() to round down to the nearest whole number
const eachKidGets = Math.floor(smarties / kids);
console.log(`Each kid gets ${eachKidGets}`); // Each kid gets 6

// We can also use modulo to get how many smarties are left over after dividing them between the kids
const dadGets = smarties % kids; // 2


// Funny floating bits
0.1 + 0.2 = 0.30000000000000004 // whoops, what's going on here?!
// Very good explaination here - https://0.30000000000000004.com/

// JavaScript also has Infinity and negative Infinity!
// Your computer can only calculate up to a certain number. If you try compute a number that is too high, you're result will be Infinity
// Example 1000 ** 200 = Infinity
// Also if you do "typeof Infinity" or "typeof -Infinity" the result will be a number. So they are both true numbers in JavaScript

// NaN (Not a Number) is also a true number and it occurs when you perform an invalid calculation between types.
// Eg. 10 / 'dog' = NaN


/**
 * Types - Objects
 */
// Objects are used to create collections of data and put them into groups.
// Instead of doing this, which isn't the best since the data isn't associated with each other...
const first = 'jonno';
const age = 100;

// We can group them together into an object using "property: value".
const person = {
    first: 'jonno',
    age: 100
}

// To access the values we can use person.first and person.age


/**
 * Types - null and undefined
 */
// Undefined occurs when trying to access a variable which has been created but not set
let dog;
console.log(dog) // undefined

// null is something that has a value of nothing.
let somethingUndefined; // undefined
const somethingNull = null; // null

// For example, Cher's first name is Cher but she doesn't have a last name
const cher = {
    first: 'Cher'
}
// So cher.last is undefined as her last name was never set.

// On the other hand, Teller from Penn and Teller has legally changed his birth name from Raymond Teller to just Teller.
// So his name was...
const teller = {
    first: 'Raymond',
    last: 'Teller'
}

// and then later updated it to:
teller.first = 'Teller';
teller.last = null; // He explicitly set is last name to nothing

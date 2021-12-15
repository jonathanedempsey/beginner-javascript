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
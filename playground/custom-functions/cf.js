// Function Definition
function calculateBill() {
    // this is the function body/block

    console.log('Running Calculate Bill');

    // Scoped variable.
    // This variable is only available within this function
    const total = 100 * 1.13;
    // console.log(total);

    // To use total outside of the function we need to use 'return'
    return total;
}


// Function Call
// We can capture the 'total' variable from calculateBill() in a new variable
const myTotal = calculateBill();

console.log(`Your Total is ${myTotal}`);


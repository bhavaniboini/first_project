// Function to find even numbers in an array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to find odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Function to print a pattern
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
printPattern(5);

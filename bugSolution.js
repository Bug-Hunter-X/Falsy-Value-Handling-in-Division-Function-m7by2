function myFunc(a, b) {
  //Check for falsy values explicitly
  if (a === 0 || b === 0 || a == null || b == null || a === '' || b === '' || a === false || b === false) {
    return 0; // Or throw an error: throw new Error('Cannot divide by zero or falsy values');
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Output: 0
console.log(myFunc(10, null)); // Output: 0
console.log(myFunc(10, '')); // Output: 0
console.log(myFunc(0, 10)); // Output: 0
console.log(myFunc(null, 10)); // Output: 0
console.log(myFunc('', 10)); // Output: 0
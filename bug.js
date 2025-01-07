function myFunc(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This is where the bug exists. It should handle other falsy values
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Output: 0
console.log(myFunc(10, null)); // Output: NaN. Should handle null
console.log(myFunc(10, '')); // Output: NaN. Should handle empty string
console.log(myFunc(0, 10)); // Output: 0
console.log(myFunc(null, 10)); //Output: NaN. Should handle null
console.log(myFunc('', 10)); // Output: NaN. Should handle empty string
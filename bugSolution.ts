function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct usage
console.log(result); // Output: 8

//Corrected usage, explicit type casting
result = subtract(5, Number("3")); 
console.log(result); //Output: 2

//Alternative: Input validation
function subtractSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      throw new Error('Invalid input: b must be a number or a parsable string');
    }
    return a - numB;
  }
  return a - b;
}

result = subtractSafe(5, "3"); // Safe usage
console.log(result); // Output: 2

result = subtractSafe(5, 3); // Safe usage
console.log(result); //Output: 2
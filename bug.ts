function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); //Correct usage
console.log(result); //Output: 8

result = subtract(5, "3"); //Incorrect usage, type error
console.log(result); // This line will not be executed due to error
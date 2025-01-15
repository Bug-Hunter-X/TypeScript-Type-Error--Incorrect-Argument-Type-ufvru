# TypeScript Type Error Example

This repository demonstrates a common type error in TypeScript that occurs when a function expecting a numeric argument receives a string. The TypeScript compiler catches this error, preventing runtime exceptions.

## Bug

The `subtract` function is defined to accept two numbers. However, in the usage example, a string ("3") is passed as the second argument. This results in a type error.

## Solution

The solution involves ensuring that only numbers are passed to the `subtract` function, either through type checking or by converting the input to a number if necessary.  The solution file provides an example of how to handle this.
# Let

let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

``` Javascript
let count = 10; //defined the variable count at the "global" scope
for (let count=0; count < 3; count++){ // defining variable count at the for's block scope
  
  console.log('count: ' + count); // this is the for scope
  
  // count: 0
  // count: 1
  // count: 2

}

console.log('count: ' + count); // here we are back at the "global" scope

// count: 10
 
 let x = 1;
 console.log(`x: ${x}`); // x: 1
 
 if (true) {
    let x = 10;
    console.log(`x: ${x}`); // x: 10
 }
 console.log(`x: ${x}`); // x: 1
```
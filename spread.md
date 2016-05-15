
# The Spread Operator

>The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
>
> --<cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">MDN</a></cite>

##Arrays - Multiple Elements 
###Combining Arrays 
```javascript 
var speak = ['Hello world.', ' This is a test', ' of']; 
console.log([...speak, " spread" ]);
// => ['Hello world.', ' This is a test', ' of', ' spread']
```
In the example above we expand the speak array's individual elements within the array that we pass to our log function.
If we insert the speak array without the spread operator we end up storing the speak array within the first index only. 

```javascript 
var speak = ['Hello world.', ' This is a test', ' of']; 
console.log([speak, " spread" ]);
// => ['Hello world.', ' This is a test', ' of'], ' spread']
```
##Functions - Multiple Arguments 
###Passing an array as the list of arguments to a function

Passing an array to a function with multiple parameters: 

```javascript
function backpack(a, b, c){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}

var array = ['macbook', 'wifi', 'surface']; 

backpack(array); 
//=> a ['macbook', 'wifi', 'surface']; 
//=> b undefined
//=> c undefined 
```
In ES5 if you wanted to assign each value in our array to an argument within our backpack function you would need to use the .apply method

```javascript
backpack.apply(undefined, array); 
//=> a 'macbook'
//=> b 'wifi'
//=> c 'surface'
```
The .apply method allows us to execute a function with an array of parameters. 

In ES6 use the spread operator to execute a function with an array of parameters. Note that the 
spread operator will start at the beginning of the array to populate the parameters - it 'spreads' the array across a function's parameters.

```javascript
backpack(...array);
//=> a 'macbook'
//=> b 'wifi'
//=> c 'surface' 
```



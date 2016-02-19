```js
// ********** A BETTER ARGUMENTS *************
// ES5
function es5() {
	var args = Array.prototype.slice.call(arguments); // transform from *array-like* to array
}
function rest(a, b) {
	var restArgs = Array.prototype.slice.call(arguments, rest.length);
}

// ES6
function es6(...args) {}
function rest(a, b, ...rest) {}
```

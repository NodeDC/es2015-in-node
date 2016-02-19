```js
/* arrow functions have this of the lexical scope and do not create their own this */
//old
function x(y) {
	this.hmm = "ok";
	setTimeout(function() {
		console.log(this);
	}, 100).bind(this);
}
//new
function x(y) {
	setTimeout(() => console.log(this), 100); 
}
/* great for chaining array functioins etc..., gotcha arguments > 1 or arguments < 1 need parens */
const x = [1,2,3].map(k => k * 2).reduce((k,z) => k+z, 0);

//old

var x = [1,2,3]
	.map(function(k) {return k * 2})
	.filter(function(z){ return z < 3});
```

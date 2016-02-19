# Symbols

## What

- Like strings or UIDs, but **guaranteed** to be unique
- (almost) private

> Symbols have nothing to do with Ruby symbols (:ruby_symbol)

## How

Create symbols (don't use `new`!)

```js
Symbol() === Symbol() // false
```

You can associate a symbol with a string for debugging purposes

```js
Symbol('foo') === Symbol('foo') // false
console.log(Symbol('foo')) // "Symbol('foo')"
```

## Why

One use case: Use like private properties for encapsulation


```javascript
const privateMethodKey = Symbol('privateMethod')

class Foo {
	constructor(){
		
		this[privateMethodKey] = () => 42
	}
	sayHello(){
		console.log('hi')
	}
}
```

## Quiz

What will this code print?
		
```javascript
const foo = new Foo()
const newSymbol = Symbol('privateMethodKey')

console.log(Object.keys(foo))
console.log(foo[newSymbol])
console.log(foo[privateMethodKey])
```
		
## Other Uses:

- used internally in JS (example: `Symbol.iterator`)
- use like enums
- monkey patching




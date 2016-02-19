```js
[0, 1, 2].includes(1); // true
[0, 1, 2].includes('1'); // false
[0, 1, 2].includes(3); // false
[0, 1, 2].includes(0, 1); // false
[1, 2, NaN].includes(NaN); // true
['hello', 'world'].includes('hello'); // true
[{a: 'b'}].includes({a: 'b'}); // false
```


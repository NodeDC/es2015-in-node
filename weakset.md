```js
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(global);
ws.add(obj);

ws.has(global); // true
ws.has(foo);    // false, foo has not been added to the set

ws.delete(global); // removes global from the set
ws.has(global);    // false, window has been removed
```

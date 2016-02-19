# Enhanced Object Literals

## Robbie Wagner, Daniel Luu, Kevin Lee

###ES5

```js
var foo = 'foo';

var obj = {
  foo: foo,
  test: function() {return "test";}
};

obj["bar" + func()] = "baz";
```

##ES2015

```js
const foo = 'foo';

const obj = {
  foo,
  test() {return "test";},
  ["bar" + func()]: "baz";
};
```

![](http://i.imgur.com/Ma8KGos.gif)

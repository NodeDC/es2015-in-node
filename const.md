## Const for Hello World of ES2015 in Node Core

### Example 1

```
const foo = "foo";
foo = "bar"; // should not assign
console.log(foo);
```

```
$ node const.js
foo
```

### Example 2

```
const foo = "foo";
const foo = "bar"; // should error out
console.log(foo);
```

```
$ node const.js
const foo = "bar"; // should error out
^

SyntaxError: Identifier 'foo' has already been declared
     at Object.<anonymous> (/Users/joshfinnie/src/personal/es2015-in-node/test.js:1:11)
     at Module._compile (module.js:435:26)
     at Object.Module._extensions..js (module.js:442:10)
     at Module.load (module.js:356:32)
     at Function.Module._load (module.js:311:12)
     at Function.Module.runMain (module.js:467:10)
     at startup (node.js:134:18)
     at node.js:961:3
```

### Example 3

```
"use strict";
const foo = "foo";
let scope1 = (variable) => {
    console.log(variable);
}
let scope2 = () => {
    const foo = "bar";
    console.log(foo)
}
console.log(foo);
scope1(foo);
scope2();
```

```
$ node const.js
foo
foo
bar
```

### Example 4

```
"use strict";
const MY_OBJECT = {"key": "foo"};
console.log(MY_OBJECT.key);
MY_OBJECT.key = "bar";
console.log(MY_OBJECT.key);
```

```
$ node test.js
foo
bar
```

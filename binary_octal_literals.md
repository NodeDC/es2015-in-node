#Binary and Octal Literals
In in ES5, hexadecimal numbers can be represented with 0x in front of the number:

```js
console.log(0xFFFFF);
```

Now, in ES6, there are literal versions of octal and binary numbers also:

```js
console.log(0b1010101); //parseInt(1010101, 2);
console.log(0o0123147); //parseInt(0123147, 8);
```

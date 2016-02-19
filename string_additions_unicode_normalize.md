# 20. String additions - Unicode code point escapes; prototype.normalize()

## es5
```
let world = '\uD83C\uDF0E'
console.log(`hello ${world}`)
// > 'hello 🌎'
```

## es2016
```
let world = '\u{1F30E}'
console.log(`hello ${world}`)
// > 'hello 🌎'
```
[more on unicode](https://ponyfoo.com/articles/es6-strings-and-unicode-in-depth#unicode)

## normalize

```
let a = 'mañana'
let b = 'mañana'
a === b
// > false
// wat
a.normalize() === b.normalize()
// > true
```
[more on normalize](https://mathiasbynens.be/notes/javascript-unicode)
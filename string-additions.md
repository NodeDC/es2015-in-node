```javascript
'use strict';

let string = 'First second third last.';

// These will be true
console.log(string.startsWith('First'));
console.log(string.endsWith('last.'));
console.log(string.includes('third'));

// These will be false
console.log(string.startsWith('third'));
console.log(string.includes('es2015'));
console.log(string.endsWith('LAST.'));

/**
 * Old and busted... new hotness
 */

// includes()
console.log(string.indexOf('second') > -1);
console.log(string.includes('second'));
console.log(string.includes('First', 6)); // false

// startsWith()
console.log(string.substr(0, 5) === 'First');
console.log(string.startsWith('First'));
console.log(string.startsWith('second', 6)); // true

// endsWith()
console.log(string.slice(-5) === 'last.');
console.log(string.endsWith('last.'));
console.log(string.endsWith('third', 18)); // true
```

# Object.assign()
By Trey and Phil

### Cloning and Object

var theOriginal = { name: 'Phil' };
var myClone = Object.assign({}, theOriginal);
console.log(myClone); // { name: 'Phil' }

### Merging Objects

```
let teamName = {name: 'Team Awesome'};
let teamMembers = {members: ['Phil', 'Trey']};

let ourAwesomeTeam = Object.assign({}, teamName, teamMembers);

console.log(ourAwesomeTeam); // {name: 'Team Awesome', members: ['Phil', 'Trey']};
```

### Handling Exceptions

```
var targetWithReadOnlyProperty = Object.defineProperty({}, 'uh-oh', {
  value: 'this is going to throw an error, yo',
  writable: false
}); // targetWithReadOnlyProperty['uh-oh'] is a read-only property

Object.assign(targetWithReadOnlyProperty, { bar: 2 }, { foo2: 3, 'uh-oh': 3, foo3: 3 }, { baz: 4 });
// TypeError: "uh-oh" is read-only
// The Exception is thrown when assigning target.foo

console.log(targetWithReadOnlyProperty.bar);  // 2, the first source was copied successfully.
console.log(targetWithReadOnlyProperty.foo2); // 3, the first property of the second source was copied successfully.
console.log(targetWithReadOnlyProperty['uh-oh']);  // 'this is going to throw an error, yo', exception is thrown here.
console.log(targetWithReadOnlyProperty.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(targetWithReadOnlyProperty.baz);  // undefined, the third source will not be copied either.
```

### Copying an Object with Getters

```
var objectWithAGetter = {
  name: 'Team Awesome',
  get members() {
    return ['Trey', 'Phil'];
  }
};

var ourTeam = Object.assign({}, objectWithAGetter); 
console.log(ourTeam); 
// { name: 'Team Awesome', members: ['Trey', 'Phil'] }, the value of ourTeam.members is the computed return value
```
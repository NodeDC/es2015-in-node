```js
	//ES2015 classes are snytactical sugar over Javacsripts existing prototype based inheritance.

		//Class Declaration
	class Car {
		constructor(color,age) {
			this.color = color;
			this.age = age;

		}
	}


	//Class Declarations dont hoist.


	//Class Expressions

	var Car = class {
		constructor(color,age){

		}
	}
	// named class
	var Car = class Car{
		constructor(color,age){

		}
	}


// Method definition
class Car {
	constructor(color,age) {
		this.color = color;
		this.age = age;

	}
	get ageAndColor(){
		return "my color is " + this.color() + "my age is " + this.age();
	}
	 color(){
		 return this.color;
	 }
	 age(){
		 return this.age;
	 }
}



//Static Methods

class Car {
	constructor() {

	}
	static getAgeAndColor(color,age){
		return "my color is " + color+ "my age is " + age;
	}

}

```

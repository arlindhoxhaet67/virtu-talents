// filename: complex_code.js
// Description: Complex code showcasing a combination of advanced JavaScript concepts

// Declare an object constructor function for creating instances of a Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define the prototype methods for Person instances
Person.prototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  celebrateBirthday: function() {
    this.age++;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  }
};

// Create two Person instances
const john = new Person("John", 25);
const emma = new Person("Emma", 30);

// Call the greet method on each Person instance
john.greet();
emma.greet();

// Define a class for handling mathematical operations
class MathOperations {
  static multiply(a, b) {
    return a * b;
  }

  static power(a, b) {
    return Math.pow(a, b);
  }

  static factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}

// Perform various math operations
const product = MathOperations.multiply(5, 6);
const powerResult = MathOperations.power(2, 8);
const factorialResult = MathOperations.factorial(7);

console.log("Product:", product);
console.log("Power Result:", powerResult);
console.log("Factorial Result:", factorialResult);

// Implement a custom data structure - Stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Use the Stack data structure
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack Size:", stack.size());
console.log("Stack Peek:", stack.peek());

stack.pop();
console.log("Stack Size after popping:", stack.size());
console.log("Is Stack Empty:", stack.isEmpty());

// Implement a custom AngularJS-like $watch function
function $watch(expression, listener) {
  let currentValue;

  return function() {
    const newValue = expression();

    if (newValue !== currentValue) {
      listener(newValue, currentValue);
      currentValue = newValue;
    }
  };
}

// Usage of $watch function
let x = 5;
const watchExpression = () => x;
const listener = (newValue, oldValue) => console.log(`Value changed from ${oldValue} to ${newValue}`);

const unsubscribe = $watch(watchExpression, listener);

x = 10;
unsubscribe();
x = 15;

// ... More sophisticated code here ...

// ...

// The code above is just an example and intentionally stopped short to illustrate a complex code structure. 

// Continue writing additional complex code beyond this point.
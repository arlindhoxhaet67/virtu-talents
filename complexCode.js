/* 
Filename: complexCode.js
Description: This code is a complex and elaborate example that demonstrates various JavaScript concepts and features.

Note: This code snippet has been truncated for demonstration purposes. It does not provide complete functionality.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  // Static method to get a person's full name
  static getFullName(person) {
    return `${person.name} Doe`;
  }
}

// Subclass of Person representing a Employee
class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  getInfo() {
    return super.getInfo() + `, Employee ID: ${this.employeeId}`;
  }
}

// Function that returns a promise after a random delay
function fetchData(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000;
    setTimeout(() => {
      if (delay < 1000) {
        resolve(`Data received from ${url}`);
      } else {
        reject(new Error(`Timeout error while fetching data from ${url}`));
      }
    }, delay);
  });
}

// Async function to fetch data from multiple URLs sequentially
async function fetchSequentially() {
  try {
    const url1Data = await fetchData('http://example.com/api/1');
    console.log(url1Data);

    const url2Data = await fetchData('http://example.com/api/2');
    console.log(url2Data);

    // ... more fetch operations

  } catch (error) {
    console.error(error);
  }
}

// Function that generates a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main program
function main() {
  const person = new Person('John', 25);
  console.log(person.getInfo());

  const employee = new Employee('Jane', 35, 1001);
  console.log(employee.getInfo());

  console.log(Person.getFullName(person));

  fetchSequentially();

  const randomNumber = getRandomNumber(1, 10);
  console.log(`Random number: ${randomNumber}`);
}

main();
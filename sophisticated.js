/* sophisticated.js  - Contains complex code for a web application */

// Import required modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create an instance of Express server
var app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/myDatabase', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a model for a User
var User = mongoose.model('User', {
    name: String,
    age: Number,
    email: String
});

// Define routes
app.get('/users', function(req, res) {
    User.find().select('name age').exec(function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
});

app.post('/users', function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'User created!' });
    });
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});

// Complex logic for additional functionality...

// Create a new class for performing complex calculations
function Calculator() {
    this.add = function(num1, num2) {
        return num1 + num2;
    };

    this.subtract = function(num1, num2) {
        return num1 - num2;
    };

    this.multiply = function(num1, num2) {
        return num1 * num2;
    };

    this.divide = function(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
    };
}

// Instantiate the calculator class
var calculator = new Calculator();

// Use the calculator to perform complex calculations
var result = calculator.add(10, 5);
console.log("Addition Result: ", result);

result = calculator.subtract(10, 5);
console.log("Subtraction Result: ", result);

result = calculator.multiply(10, 5);
console.log("Multiplication Result: ", result);

result = calculator.divide(10, 5);
console.log("Division Result: ", result);

// Export necessary functions, classes, or objects
module.exports = { app, User, Calculator };
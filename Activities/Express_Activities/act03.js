// Activity 3: Query Parameters

const express = require("express");
const app = express();

const PORT = 3000;

// Example 1: Basic query parameter
// URL: http://localhost:3000/user?name=Pranali&age=20
app.get("/user", (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});


// Example 2: Default value if not provided
// URL: http://localhost:3000/course
app.get("/course", (req, res) => {
    let course = req.query.course || "AIML";

    res.send(`Course: ${course}`);
});


// Example 3: Multiple query parameters
// URL: http://localhost:3000/product?name=Laptop&price=50000
app.get("/product", (req, res) => {
    let { name, price } = req.query;

    res.send(`Product: ${name}, Price: ${price}`);
});


// Example 4: Real-life filtering example
// URL: http://localhost:3000/search?category=books&limit=2
app.get("/search", (req, res) => {
    let category = req.query.category;
    let limit = req.query.limit;

    res.send(`Searching in ${category}, showing ${limit} results`);
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
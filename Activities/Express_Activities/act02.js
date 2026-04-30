// Activity 2: Middleware in Express

const express = require("express");
const app = express();

const PORT = 3000;

// Built-in middleware
// It helps Express read JSON data from request body
app.use(express.json());

// Custom middleware
function loggerMiddleware(req, res, next) {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    // next() passes control to the next middleware or route
    next();
}

// Using custom middleware globally
app.use(loggerMiddleware);

// Route 1
app.get("/", (req, res) => {
    res.send("Home Page - Middleware Example");
});

// Route 2
app.get("/about", (req, res) => {
    res.send("About Page");
});

// POST route
app.post("/student", (req, res) => {
    const student = req.body;
    res.send({
        message: "Student data received",
        data: student
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
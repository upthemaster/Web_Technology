// Activity 1: Express Basics

const express = require("express");
const app = express();

const PORT = 3000;

// GET request
app.get("/", (req, res) => {
    res.send("GET request: Home Page");
});

// POST request
app.post("/add", (req, res) => {
    res.send("POST request: Data Added");
});

// PUT request
app.put("/update", (req, res) => {
    res.send("PUT request: Data Updated");
});

// DELETE request
app.delete("/delete", (req, res) => {
    res.send("DELETE request: Data Deleted");
});

// Route with JS logic
app.get("/user", (req, res) => {
    let name = "Pranali";
    res.send("User Name: " + name);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
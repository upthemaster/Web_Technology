// Activity 4: Template Engine EJS, Static Files and Router

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Import router
const studentRoutes = require("./routes/studentRoutes");

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views folder path
app.set("views", path.join(__dirname, "views"));

// Static files middleware
app.use(express.static(path.join(__dirname, "public")));

// Use student routes
app.use("/", studentRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
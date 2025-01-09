const app = require("./app");
const { port } = require("./config");
const path = require("path");
const express = require("express");

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route handler for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

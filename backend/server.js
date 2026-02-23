const express = require("express");
const app = express();
const expenseRoute = require("./src/routes/expenses");

// Middleware
app.use(express.json());
app.use("/api/expenses", expenseRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Finance Dashboard API is running");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

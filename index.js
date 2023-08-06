import express from "express";
const app = express();

app.use(express.json());

// Define your routes

// Add more routes as needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

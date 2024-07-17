import bodyParser from "body-parser"; // Middleware to parse incoming request bodies
import cors from "cors"; // Middleware to enable Cross-Origin Resource Sharing
import express from "express"; // Framework for building web applications
import userRoutes from "./route/userRoutes"; // Import user routes
import taskRoutes from "./route/taskRoutes"; // Import task routes
import mongoose from "mongoose"; // MongoDB object modeling tool

const app = express(); // Initialize Express application

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());
// Middleware to parse URL-encoded bodies in incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware to enable CORS for all incoming requests
app.use(cors());

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    // Connect to the MongoDB database with the specified URL
    await mongoose.connect("mongodb://localhost:27017/taskDb");
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
  }
};
connectToDatabase(); // Call the function to connect to the database

// Define a route handler for the root URL
app.get("/", (_, res) => {
  // Send a JSON response with status 201 and a message
  return res.status(201).json({ message: "Hello World" });
});

// Use user routes for requests to /users endpoint
app.use("/users", userRoutes);
// Use task routes for requests to /tasks endpoint
app.use("/tasks", taskRoutes);

// Start the server and listen on port 8000
app.listen(8000, () => console.log("Server running on port 8000"));

import { Router } from "express"; // Import the Router module from Express
import taskController from "../controller/taskController"; // Import the taskController module

const router = Router(); // Create a new router instance

// Define a POST route for creating a task
router.post("/", (req, res) => taskController.createTask(req, res));

// Define a PUT route for editing a task with a specific ID
router.put("/:id", (req, res) => taskController.editTask(req, res));

// Define a DELETE route for deleting a task with a specific ID
router.delete("/:id", (req, res) => taskController.deleteTaask(req, res));

// Define a GET route for retrieving tasks
router.get("/", (req, res) => taskController.getTask(req, res));

export default router; // Export the router instance as the default export

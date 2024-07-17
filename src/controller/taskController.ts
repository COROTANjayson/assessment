import { Request, Response } from "express"; // Import Request and Response types from Express
import taskServices from "../services/taskServices"; // Import task services

class TaskController {
  // Method to create a new task
  async createTask(req: Request, res: Response): Promise<any> {
    try {
      // Extract title, description, and status from the request body
      let { title, description, status } = req.body;
      let payload: any = {};
      if (title) payload.title = title;
      if (description) payload.description = description;

      // Check if required fields are provided
      if (!title || !description) {
        res.status(400).json({ message: "Please input required fields" });
        return;
      }

      // Call the service to add a new task
      const task = await taskServices.addTask(payload);
      return res.status(200).json({ message: "Task Added", data: task });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  // Method to edit an existing task
  async editTask(req: Request, res: Response): Promise<any> {
    try {
      const params = req.params;
      // Extract title, description, and status from the request body
      let { title, description, status } = req.body;
      let payload: any = {};
      if (title) payload.title = title;
      if (description) payload.description = description;
      if (status && (status === "pending" || status === "completed")) {
        payload.status = status;
      }

      // Check if there are any fields to update
      if (Object.keys(payload).length === 0) {
        res.status(400).json({ message: "Please input fields to update" });
        return;
      }

      // Call the service to edit the task
      const task = await taskServices.editTask(payload, params.id);
      if (!task) {
        res.status(404).json({ message: "Task ID not found" });
        return;
      }

      return res.status(200).json({ message: "Task Updated", data: task });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  // Method to delete a task
  async deleteTaask(req: Request, res: Response): Promise<any> {
    try {
      const params = req.params;

      // Call the service to delete the task
      const task = await taskServices.deleteTask(params.id);
      if (!task) {
        res.status(404).json({ message: "Task ID not found" });
        return;
      }

      return res.status(200).json({ message: "Task Deleted", data: task });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  // Method to get tasks based on filters
  async getTask(req: Request, res: Response): Promise<any> {
    try {
      const filters = req.query;

      // Call the service to get tasks based on filters
      const task = await taskServices.getTask(filters);
      return res.status(200).json({ data: task });
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }
}

// Export an instance of the TaskController class as the default export
export default new TaskController();

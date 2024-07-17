import { ITask, ITaskRepository } from "../interface/taskInterface"; // Import task interfaces
import Task from "../model/task"; // Import the Task model

// Define a class implementing the ITaskRepository interface
class TaskRepository implements ITaskRepository {
  // Method to create a new task
  async createTask(payload: ITask): Promise<any> {
    const task = new Task(payload); // Create a new Task instance with the provided payload
    let res = await task.save(); // Save the task to the database
    return res; // Return the saved task
  }

  // Method to update an existing task
  async updateTask(payload: any, id: string): Promise<any> {
    let options = { new: true }; // Option to return the updated document
    let updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: payload }, // Set the fields to update with the provided payload
      options
    );
    return updatedTask; // Return the updated task
  }

  // Method to remove a task by ID
  async removeTask(id: string): Promise<any> {
    let deletedTask = await Task.findByIdAndDelete(id); // Find and delete the task by ID
    return deletedTask; // Return the deleted task
  }

  // Method to query tasks based on provided filters
  async queryTask(filters: any): Promise<any> {
    const task = Task.find(filters); // Find tasks matching the filters
    const res = await task.exec(); // Execute the query
    return res; // Return the queried tasks
  }

  // Method to query a task by ID (not implemented)
  queryTaskById(id: string): Promise<any> {
    throw new Error("Method not implemented."); // Throw an error indicating the method is not implemented
  }
}

// Export an instance of the TaskRepository class as the default export
export default new TaskRepository();

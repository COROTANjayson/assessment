import { ITask, ITaskService } from "../interface/taskInterface"; // Import task interfaces
import taskRepository from "../repository/taskRepository"; // Import the task repository

// Define a class implementing the ITaskService interface
class TaskService implements ITaskService {
  // Method to add a new task
  async addTask(payload: ITask): Promise<any> {
    payload.status = "pending"; 
    const newTask = taskRepository.createTask(payload); // Call the repository to create the task
    return await newTask; // Return the newly created task
  }

  // Method to edit an existing task
  async editTask(payload: any, id: string): Promise<any> {
    let updateTask = await taskRepository.updateTask(payload, id); // Call the repository to update the task
    return updateTask; // Return the updated task
  }

  // Method to delete a task by ID
  async deleteTask(id: string): Promise<any> {
    let task = await taskRepository.removeTask(id); // Call the repository to remove the task
    return task; // Return the removed task
  }

  // Method to get tasks based on filters
  getTask(filters: any): Promise<any> {
    const newTask = taskRepository.queryTask(filters); // Call the repository to query tasks
    return newTask; // Return the queried tasks
  }

  // Method to get a task by ID (not implemented)
  getTaskById(id: string): Promise<any> {
    throw new Error("Method not implemented."); // Throw an error indicating the method is not implemented
  }
}

// Export an instance of the TaskService class as the default export
export default new TaskService();

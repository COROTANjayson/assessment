import { Document, Schema, model } from "mongoose"; // Import necessary modules from Mongoose
import { ITask } from "../interface/taskInterface"; // Import the ITask interface

// Define an interface that extends both ITask and Document interfaces
interface ITaskModel extends ITask, Document {}

// Define the task schema
const taskSchema = new Schema<ITaskModel>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

// Create a Mongoose model based on the task schema
const Task = model<ITaskModel>("Task", taskSchema);

// Export the Task model
export default Task;

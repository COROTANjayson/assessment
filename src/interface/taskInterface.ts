// Define an interface for the Task object
export interface ITask {
  title: string;
  description: string;
  status?: string;
}

// Define an interface for the Task Repository
export interface ITaskRepository {
  createTask(payload: ITask): Promise<any>;
  updateTask(payload: any, id: string): Promise<any>;
  removeTask(id: string): Promise<any>;
  queryTask(filters: any): Promise<any>;
  queryTaskById(id: string): Promise<any>;
}

// Define an interface for the Task Service
export interface ITaskService {
  addTask(payload: ITask): Promise<any>;
  editTask(payload: any, id: string): Promise<any>;
  deleteTask(id: string): Promise<any>;
  getTask(filters: any): Promise<any>;
  getTaskById(id: string): Promise<any>;
}

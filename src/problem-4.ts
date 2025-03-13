enum Status {
    todo = "todo",
    inProgress = "in-progress",
    completed = "completed"
}
type TaskStatus = Status.todo | Status.inProgress | Status.completed;

class TaskManager {
    private static tasks: { id: number; title: string; status: TaskStatus }[] = [];
    private static nextId = 1; // Auto-increment ID

    addTask(title: string): { id: number; title: string; status: TaskStatus } {
        const newTask = { id: TaskManager.nextId++, title, status: Status.todo };
        TaskManager.tasks.push(newTask);
        return newTask;
    }

    updateStatus(id: number, status: TaskStatus): string {
        const task = TaskManager.tasks.find(task => task.id === id);
        if (!task) return `Error: Task with ID ${id} not found.`;
        task.status = status;
        return `Task ID ${id} updated to ${status}.`;
    }

    getTasksByStatus(status: TaskStatus): { id: number; title: string; status: TaskStatus }[] {
        return TaskManager.tasks.filter(task => task.status === status);
    }

    static getAllTasks(): { id: number; title: string; status: TaskStatus }[] {
        return TaskManager.tasks;
    }
}

// Creating TaskManager instance
const taskManager = new TaskManager();

// Adding tasks
console.log(taskManager.addTask("Task 1")); // { id: 1, title: "Task 1", status: "todo" }
console.log(taskManager.addTask("Task 2")); // { id: 2, title: "Task 2", status: "todo" }

// Updating task status
console.log(taskManager.updateStatus(1, Status.inProgress)); // Task ID 1 updated to in-progress.
console.log(taskManager.updateStatus(3, Status.completed));  // Error: Task with ID 3 not found.

// Retrieving tasks by status
console.log(taskManager.getTasksByStatus(Status.todo));       // List of "todo" tasks
console.log(taskManager.getTasksByStatus(Status.inProgress)); // List of "in-progress" tasks

// Get all tasks
console.log(TaskManager.getAllTasks());

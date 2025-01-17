let tasks = [
    {
      id: "1",
      assignedTo: "User 1",
      status: "Completed",
      dueDate: "2024-10-12",
      priority: "Low",
      comments: "This task is good",
    },
    {
        id: "2",
        assignedTo: "User 2",
        status: "Completed",
        dueDate: "2024-10-12",
        priority: "Low",
        comments: "This task is good",
      },
      {
        id: "3",
        assignedTo: "User 1",
        status: "Completed",
        dueDate: "2024-10-12",
        priority: "Low",
        comments: "This task is good",
      },
      {
        id: "4",
        assignedTo: "User 1",
        status: "Completed",
        dueDate: "2024-10-12",
        priority: "Low",
        comments: "This task is good",
      },
    // Add more sample tasks here...
  ];
  
  export const getTasks = () => tasks;
  
  export const addTask = (task) => {
    task.id = String(Date.now());
    tasks.push(task);
  };
  
  export const updateTask = (updatedTask) => {
    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  };
  
  export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
  };
  
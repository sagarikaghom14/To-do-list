import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskForm";
import 'remixicon/fonts/remixicon.css'
import { getTasks, addTask, updateTask, deleteTask } from "./services/taskService";

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (task) => {
    addTask(task);
    setTasks(getTasks());
  };

  const handleEditTask = (task) => {
    updateTask(task);
    setTasks(getTasks());
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  const handleOpenModal = (task = null) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  return (
    <div className="px-20 py-20 ">
      <TaskList
        tasks={tasks}
        onEdit={handleOpenModal}
        onDelete={handleDeleteTask}
      />
      {modalVisible && (
        <TaskModal
          task={selectedTask}
          onSave={(task) => {
            selectedTask ? handleEditTask(task) : handleAddTask(task);
            handleCloseModal();
          }}
          onCancel={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
import { useState, useEffect } from "react";

const TaskModal = ({ task, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    assignedTo: "",
    status: "Not Started",
    dueDate: "",
    priority: "Normal",
    comments: "",
  });

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-gray-50 border border-gray-600 rounded shadow-lg w-[50%]">
        <h2 className="text-2xl font-medium text-gray-800 text-center border-b border-gray-400 py-4">
          {task ? "Edit Task" : "New Task"}
        </h2>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Assigned To
              </label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block mb-1 text-gray-700">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="block mb-1 text-gray-700">
                <span className="text-red-500">*</span> Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              >
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block mb-1 text-gray-700">Description</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full resize-none border px-3 py-2 rounded"
                rows="4"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-end space-x-2 border-t border-gray-400 p-5 bg-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-yellow-200 text-gray-700 border border-yellow-400 rounded hover:bg-yellow-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gray-700 text-yellow-200 border border-gray-50 rounded hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;

import React, { useState } from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white border border-gray-600 rounded shadow-lg w-[60%] relative">
        <button
          onClick={onCancel}
          className="absolute -top-20 text-6xl right-1 text-white hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-3xl font-medium text-white bg-red-700 text-center mb-4 p-5">Delete</h2>
        <p className="text-gray-700 ml-10 mb-5 mt-3 text-xl">Do you want to delete this task?</p>
        <div className="flex justify-end space-x-4 p-5">
          <button
            onClick={onCancel}
            className="px-10 py-2 bg-gray-700 text-yellow-200 border border-gray-400 rounded"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-10 py-2 bg-yellow-200 text-gray-700 border border-red-700 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
  };

  const handleConfirmDelete = () => {
    onDelete(taskToDelete.id);
    setTaskToDelete(null);
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  return (
    <div className='border border-gray-400 rounded'>
      <div className="border px-2 py-1 rounded bg-gray-100 border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-normal gap-4">
            <div className="flex items-center flex-col gap-1">
              <img className="mt-5 ml-2 h-[60px] w-[60px]" src="https://img.icons8.com/?size=100&id=65285&format=png&color=FA5252" alt="icon" />
              <p className="text-gray-500 ml-2">{tasks.length} records</p>
            </div>
            <div >
              <h2 className="text-3xl font-normal text-gray-700 mb-1">Tasks</h2>
              <p className="text-gray-500">All Tasks</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-1 w-full max-w-md">
              <button
                onClick={() => onEdit()}
                className="text-xl flex-1 px-4 py-2 rounded-l-md border-2 border-yellow-300 bg-yellow-200 text-gray-600">
                New Task
              </button>
              <button className="text-xl flex-1 px-4 py-2 rounded-r-md border-2 border-yellow-300 bg-yellow-200 text-gray-600">
                Refresh
              </button>
            </div>
            <div className="max-w-md flex w-full text-xl border rounded-md overflow-hidden">
              <input
                type="text"
                className="flex-1 placeholder-gray-400 text-gray-500 px-4 py-2 focus:outline-none"
                placeholder="Search"
              />
              <button className="bg-white px-4 py-2 text-gray-500 hover:text-gray-700">
                <i className="ri-search-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table-auto w-full">
        <thead className="border-b border-gray-200">
          <tr className="bg-gray-50 text-blue-900">
            <th className="px-4 py-2">
              <input type="checkbox" className="w-5 h-5" />
            </th>
            <th className="px-4 py-1 text-left text-xl font-light">Assigned To</th>
            <th className="px-4 py-1 text-left text-xl font-light">Status</th>
            <th className="px-4 py-1 text-left text-xl font-light">Due Date</th>
            <th className="px-4 py-1 text-left text-xl font-light">Priority</th>
            <th className="px-4 py-1 text-left text-xl font-light">Comments</th>
            <th className="px-4 py-1 text-left text-xl font-light"></th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-center">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2">{task.assignedTo}</td>
              <td className="px-4 py-2">{task.status}</td>
              <td className="px-4 py-2">{task.dueDate}</td>
              <td className="px-4 py-2">{task.priority}</td>
              <td className="px-4 py-2">{task.comments}</td>
              <td>
                <button
                  className="text-gray-500 border-2 border-gray-200 px-1 rounded hover:text-gray-700"
                  onClick={() => toggleDropdown(task.id)}
                >
                  ▼
                </button>
                {openDropdown === task.id && (
                  <div className="absolute bg-white shadow-lg border left-[81%] h-[13%] rounded w-[12%]">
                    <button
                      className="w-[93%] text-left ml-3 mt-3 px-2 py-2 bg-yellow-200 text-gray-700 hover:bg-gray-100"
                      onClick={() => onEdit(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-[93%] text-left ml-3 px-2 py-2 bg-yellow-200 text-gray-700 hover:bg-gray-100"
                      onClick={() => handleDeleteClick(task)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {taskToDelete && (
        <DeleteConfirmation
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      <footer>
        <div className="flex justify-between items-center p-4 border rounded bg-gray-100 border-gray-400">
          <div className="flex items-center rounded bg-white">
            <input
              type="number"
              value={20} // Default value
              className="w-[100px] text-center p-2 border-r border-gray-300 focus:outline-none"
            />
            <div className="flex flex-col">
              <button
                className="h-5 w-7 bg-gray-50 border-2 text-gray-500 text-xs flex items-center justify-center"
                onClick={() => {
                  const input = document.querySelector("input[type='number']");
                  if (input) input.stepUp();
                }}
              >
                ▲
              </button>
              <button
                className="h-5 w-7 bg-gray-50 border-2 text-gray-500 text-xs flex items-center justify-center"
                onClick={() => {
                  const input = document.querySelector("input[type='number']");
                  if (input) input.stepDown();
                }}
              >
                ▼
              </button>
            </div>
          </div>
          <div className="flex px-5 space-x-0">
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 w-full px-5 py-2 space-x-2">
              <i className="ri-arrow-up-double-line"></i>
              <span>First</span>
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 w-full px-5 py-2 space-x-2">
              <i className="ri-arrow-left-s-line"></i>
              <span>Prev</span>
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 w-full px-5 py-2 space-x-2">
              <span>1</span>
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 w-full px-5 py-2 space-x-2">
              <span>Next</span>
              <i className="ri-arrow-right-s-line"></i>
            </button>
            <button className="flex items-center justify-center bg-gray-100 border border-gray-300 w-full px-5 py-2 space-x-2">
              <span>Last</span>
              <i className="ri-arrow-down-double-line"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaskList;
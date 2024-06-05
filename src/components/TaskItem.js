import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../utils/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditTask = () => {
    dispatch(editTask({ id: task.id, text: newText }));
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full px-3 text-lg font-semibold py-2 m-4 border-2 border-black bg-[#B380DA] rounded-lg">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEditTask}
          onKeyDown={(e) => e.key === "Enter" && handleEditTask()}
          className="p-2 flex-1 bg-[#B380DA] outline-none"
        />
      ) : (
        <span
          onClick={() => dispatch(toggleTask(task.id))}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </span>
      )}
      <div className="flex mt-2 md:mt-0">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-[#90D5A9] p-2 mx-1 border-2 border-black rounded-lg"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="bg-red-500 p-2 border-2 border-black rounded-lg"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

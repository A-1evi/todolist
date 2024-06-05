import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 border-b border-black pb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        placeholder="Enter task.."
        className="px-4 py-3 w-full md:w-2/3 lg:w-1/2 outline-none border-2 border-black rounded-2xl bg-[#F7CB66] placeholder:text-lg shadow-lg text-lg mb-2 md:mb-0 md:mr-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-lime-400 border-2 border-black p-2 rounded-2xl shadow-lg font-semibold w-full md:w-auto"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

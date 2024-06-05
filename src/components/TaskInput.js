import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskSlice";
const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  // dispatching the task to redux store
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask("");
    }
  };

  return (
    <div className="flex justify-center p-4 border-b border-black pb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask}
        placeholder="Enter task.."
        className=" px-4 py-3 w-1/2 outline-none border-2  border-black rounded-2xl bg-[#F7CB66] placeholder: placeholder:text-lg  shadow-lg text-lg "
      />
      <button
        onClick={handleAddTask}
        className=" bg-lime-400 border-2 border-black p-2 ml-2 rounded-2xl shadow-lg font-semibold"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

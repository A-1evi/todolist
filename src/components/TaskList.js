import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((store) => store.tasks);

  return (
    <div className="px-4 py-3 mx-auto w-full lg:w-full lg:flex-col md:w-3/4 lg:w-3/4 lg:items-start ">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

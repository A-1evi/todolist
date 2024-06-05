import { createSlice } from "@reduxjs/toolkit";

//helper function
const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) =>{
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
 
const taskSlice = createSlice({
  name: "tasks",
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveTasksToLocalStorage(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(newState);
      return newState;
    },
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveTasksToLocalStorage(state);
      }
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;

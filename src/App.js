import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./utils/store";
import { date } from "./utils/date";
import img from "./assets/neobruthalism.svg";

const App = () => {
  return (
    <div className="App min-h-screen flex  items-center relative">
      <Provider store={store}>
        <img
          alt="bg"
          src={img}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative mx-auto my-4 w-11/12 md:w-11/12 lg:w-2/5 z-10 bg-[#60C0BF] p-4 rounded-xl shadow-xl border-2 border-black">
          <header className="text-black  text-3xl md:text-4xl lg:text-5xl font-bold p-4">
            <h1>Things to do:</h1>
          </header>
          <h1 className="text-lg md:text-xl mx-4 my-2 font-semibold">{date}</h1>
          <TaskInput />
          <TaskList />
        </div>
      </Provider>
    </div>
  );
};

export default App;

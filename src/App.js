import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TaskContext";

function App() {
  return (
    <div className="App">
      <h2>Simple Todo App</h2>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;

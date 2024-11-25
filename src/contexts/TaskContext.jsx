import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../data/initialTasks";
import taskReducer from "../taskReducer";

export const TaskContext = createContext(null);
export let nextId = 4;

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAdd = (text) => {
    dispatch({
      type: "added",
      nextId: nextId++,
      text,
    });
  };

  const handleChange = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        onChangeTask: handleChange,
        onAdd: handleAdd,
        onDelete: handleDelete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => {
  return useContext(TaskContext);
};

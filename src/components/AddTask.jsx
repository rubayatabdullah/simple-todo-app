import { useState } from "react";
import { TaskContext, useTask } from "../contexts/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");

  const { onAdd } = useTask(TaskContext);
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}

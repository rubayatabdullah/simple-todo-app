import { TaskContext, useTask } from "../contexts/TaskContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks, onChangeTask, onDelete } = useTask(TaskContext);
  const taskElements = tasks.map((task) => (
    <li key={task.id}>
      <Task task={task} onChange={onChangeTask} onDelete={onDelete} />
    </li>
  ));

  return (
    <>
      <ul>{taskElements}</ul>
    </>
  );
}

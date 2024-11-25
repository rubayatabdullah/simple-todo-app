export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.nextId,
          title: action.text,
          done: false,
        },
      ];

    case "changed":
      return tasks.map((newTask) => {
        return newTask.id === action.task.id
          ? { ...newTask, title: action.task.title, done: action.task.done }
          : newTask;
      });

    case "deleted":
      return tasks.filter((t) => {
        return t.id !== action.taskId;
      });

    default:
      throw new Error("Fuck You!");
  }
}

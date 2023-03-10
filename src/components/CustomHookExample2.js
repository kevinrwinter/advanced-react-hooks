import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [taskList, setTaskList] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task: task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTaskList([...taskList, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <hr />

      {taskList.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

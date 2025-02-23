import { useState } from "react";
import { TODO_LIST } from "../../constants/constants";

export default function TodoList() {
  const [Tasks, setTasks] = useState(TODO_LIST);

  return (
    <div>
      <h3> TO DO list</h3>
      <ol>
        {Tasks.map((taskItem, index) => (
          <li>
            {taskItem.name} - {taskItem.status}
            <button
              disabled={taskItem.status === "completed"}
              style={{
                cursor:
                  taskItem.status === "completed" ? "not-allowed" : "pointer",
              }}
              // condition good for small size arrays but not good for large lists because it will re-render the whole list and map through the entire array,
              onClick={() =>
                setTasks((prevTasks) =>
                  prevTasks.map((task) =>
                    task.name === taskItem.name
                      ? { ...task, status: "completed" }
                      : task
                  )
                )
              }>
              Complete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

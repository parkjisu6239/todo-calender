import type { ChangeEvent } from "react";
import { useState } from "react";
import Task from "../../mocules/Task";

interface TaskItem {
  id: string;
  isDone: boolean;
  handleCheckbox: () => void;
  content: string;
  isEditing: boolean;
  setEditMode: (value: boolean) => void;
  onChange: (e: ChangeEvent) => void;
}

interface Props {
  tasks: TaskItem[];
}

type TaskKey = "isDone" | "content" | "isEditing"

function TaskList() {
  const [tasks, setTask] = useState([
    {
      id: "1",
      isDone: false,
      content: "리액트 공부",
      isEditing: false
    }
  ]);

  const handleCheckbox = (index: number) => {
    const tempTasks = [...tasks];
    const tempTask = { ...tempTasks[index] };
    tempTask.isDone = !tempTask.isDone;
    tempTasks[index] = tempTask;
    setTask(tempTasks);
  };

  const setEditMode = (index: number, value: boolean) => {
    const tempTasks = [...tasks];
    const tempTask = { ...tempTasks[index] };
    tempTask.isEditing = value;
    tempTasks[index] = tempTask;
    setTask(tempTasks);
  };

  const changeContent = (index: number, content: string) => {
    const tempTasks = [...tasks];
    const tempTask = { ...tempTasks[index] };
    tempTask.content = content;
    tempTasks[index] = tempTask;
    setTask(tempTasks);
  };

  return (
    <div>
      {tasks.map((task, idx) => (
        <Task
          key={task.id}
          {...task}
          handleCheckbox={() => handleCheckbox(idx)}
          setEditMode={(value) => setEditMode(idx, value)}
          changeContent={(content) => changeContent(idx, content)}
        />
      ))}
    </div>
  );
}

export default TaskList;

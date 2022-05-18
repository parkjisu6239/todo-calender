import * as React from "react";
import { css, keyframes } from "@emotion/css";
import Task from "components/UI/mocules/Task";

const taskListCss = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const loadingItemCss = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const glowBackground = keyframes`
  0% {background-color: #e1e1e1}
  50% {background-color: #ececec}
  100% {background-color: #e1e1e1}
`;

const glowCheckboxCss = css`
  display: block;
  width: 15px;
  height: 15px;
  animation: ${glowBackground} 2s ease infinite;
  border-radius: 2px;
`;

const glowTextCss = css`
  & span {
    color: transparent;
    border-radius: 3px;
    animation: ${glowBackground} 2s ease infinite;
  }
`;

interface TaskItem {
  id: string;
  isDone: boolean;
  content: string;
  isEditing: boolean;
}

interface Props {
  tasks: TaskItem[];
  loading?: boolean;
  handleCheckbox: (idx: number) => void;
  setEditMode: (idx:number, value: boolean) => void;
  changeContent: (index:number, content: string) => void;
}

function TaskList({
  tasks,
  loading = false,
  handleCheckbox,
  setEditMode,
  changeContent
}: Props) {
  const LoadingRow = (
    <div className={loadingItemCss}>
      <span className={glowCheckboxCss} />
      <span className={glowTextCss}>
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className={taskListCss} data-testid="loading" key="loading">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  return (
    <div className={taskListCss}>
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

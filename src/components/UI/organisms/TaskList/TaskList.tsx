import Task from "@/components/UI/mocules/Task";

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
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key="loading">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

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

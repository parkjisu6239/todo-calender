import React from "react";
import { css, cx } from "@emotion/css";
import { MdModeEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import Checkbox from "../../atoms/Checkbox";

const taskCss = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
`;

const defaultInputCss = css`
  width: inherit;
  background-color: transparent;
  border: transparent;
`;

const isDoneInputCss = css`
  color: gray;
  text-decoration: line-through;
`;

interface Props {
  id: string;
  isDone: boolean;
  handleCheckbox: () => void;
  content: string;
  isEditing: boolean;
}

function Task(props: Props) {
  return (
    <span className={taskCss}>
      <Checkbox
        checked={props.isDone}
        id={props.id}
        handleCheckbox={props.handleCheckbox}
      />
      <input
        className={cx(defaultInputCss, { [isDoneInputCss]: props.isDone })}
        type="text"
        value={props.content}
        readOnly={!props.isEditing}
        disabled={!props.isEditing}
      />
      <MdModeEdit />
      <IoTrash />
    </span>
  );
}

export default Task;

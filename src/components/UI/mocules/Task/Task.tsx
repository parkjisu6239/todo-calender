import React, { useEffect, useRef, useState } from "react";
import { css, cx } from "@emotion/css";
import { IoTrash } from "react-icons/io5";
import Checkbox from "components/UI/atoms/Checkbox";

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
  &:focus {
    outline: none;
    border-bottom: solid 1px #56a5ff;
  }
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
  setEditMode: (value: boolean) => void;
  changeContent: (content: string) => void;
}

function Task(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskContent, setTaskContent] = useState(props.content);

  useEffect(() => {
    if (inputRef.current != null && props.isEditing) {
      inputRef.current.focus();
    }
  }, [props.isEditing]);

  const complteEdit = () => {
    props.changeContent(taskContent);
    props.setEditMode(false);
  };

  return (
    <span className={taskCss}>
      <Checkbox
        checked={props.isDone}
        id={props.id}
        handleCheckbox={props.handleCheckbox}
      />
      <input
        ref={inputRef}
        className={cx(
          defaultInputCss,
          { [isDoneInputCss]: props.isDone }
        )}
        type="text"
        value={taskContent}
        readOnly={!props.isEditing}
        disabled={props.isDone}
        onChange={(e) => setTaskContent(e.target.value)} // 인풋 수정
        onFocus={() => props.setEditMode(true)} // 수정 모드
        onBlur={complteEdit} // 변경 사항 저장 & 수정 모드 해제
      />
      {/* TODO: delete
      <IoTrash /> */}
    </span>
  );
}

export default Task;

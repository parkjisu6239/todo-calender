import React from "react";
import { css, cx } from "@emotion/css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const customCheckBoxCss = (checked: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${checked ? "green" : "gray"};
  font-size: large;
`;

const inputCheckBoxCss = css`
  display: none;
`;

interface Props {
  id: string;
  checked: boolean;
  handleCheckbox: () => void;
}

function Checkbox(props: Props) {
  return (
    <label className={customCheckBoxCss(props.checked)} htmlFor={props.id}>
      {props.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      <input
        id={props.id}
        className={inputCheckBoxCss}
        type="checkbox"
        checked={props.checked}
        onClick={props.handleCheckbox}
      />
    </label>
  );
}

export default Checkbox;

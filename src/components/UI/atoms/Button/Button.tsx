import React from "react";
import { css, cx } from "@emotion/css";

const defaultButtonCss = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

const primaryButtonCss = css`
  color: white;
  background-color: #1ea7fd;
`;

const secondaryButtonCss = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const smallButtonCss = css`
  font-size: 12px;
  padding: 10px 16px;
`;

const mediumButtonCss = css`
  font-size: 14px;
  padding: 11px 20px;
`;

const largeButtonCss = css`
  font-size: 16px;
  padding: 12px 24px;
`;

interface Props {
  btnType?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

function Button(props: Props) {
  return (
    <button
      type="button"
      className={cx(
        defaultButtonCss,
        { [primaryButtonCss]: props.btnType === "primary" },
        { [secondaryButtonCss]: props.btnType === "secondary" },
        { [smallButtonCss]: props.size === "small" },
        { [mediumButtonCss]: props.size === "medium" },
        { [largeButtonCss]: props.size === "large" }
      )}
      {...props}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  btnType: "primary",
  size: "medium"
};

export default Button;

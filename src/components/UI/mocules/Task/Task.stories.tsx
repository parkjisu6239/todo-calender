import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Task from "./Task";

export default {
  title: "atoms/Task",
  component: Task,
  args: {
    id: "1",
    content: "리액트 공부하기",
    handleCheckbox: () => console.log("click"),
    setEditMode: (value) => console.log(value),
    changeContent: (value) => console.log(value)
  }
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Checked = Template.bind({});
Checked.storyName = "Checked";
Checked.args = {
  isDone: true
};

export const UnChecked = Template.bind({});
UnChecked.storyName = "UnChecked";
UnChecked.args = {
  isDone: false
};

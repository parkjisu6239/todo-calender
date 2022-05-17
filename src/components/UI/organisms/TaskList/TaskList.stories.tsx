import type { ComponentStory, ComponentMeta } from "@storybook/react";
import TaskList from "./TaskList";

export default {
  title: "atoms/TaskList",
  component: TaskList,
  args: {
    tasks: [
      {
        id: "1",
        isDone: false,
        content: "리액트 공부",
        isEditing: false
      },
      {
        id: "2",
        isDone: true,
        content: "리액트 공부2",
        isEditing: false
      },
      {
        id: "3",
        isDone: false,
        content: "리액트 공부3",
        isEditing: true
      }
    ],
    handleCheckbox: (idx: number) => console.log("체크박스"),
    setEditMode: (idx:number, value: boolean) => console.log("수정모드"),
    changeContent: (index:number, content: string) => console.log("내용수정")
  }
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.storyName = "Default";

export const Loading = Template.bind({});
Loading.storyName = "Loading";
Loading.args = {
  loading: true
};

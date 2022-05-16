import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ChangeEvent } from "react";

import TaskList from "./TaskList";

export default {
  title: "atoms/TaskList",
  component: TaskList,
  args: {
    // tasks: [
    //   {
    //     id: "1",
    //     isDone: false,
    //     handleCheckbox() {
    //       this.isDone = !this.isDone;
    //     },
    //     content: "리액트 공부",
    //     isEditing: false,
    //     setEditMode(value: boolean) {
    //       this.isEditing = value;
    //     },
    //     onChange(e: ChangeEvent) {
    //       this.content = (e.target as HTMLInputElement).value;
    //     }
    //   }
    // ]
  }
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList />;

export const Default = Template.bind({});
Default.storyName = "Default";

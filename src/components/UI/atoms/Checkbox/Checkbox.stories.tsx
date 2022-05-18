import * as React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
  args: {
    id: "1",
    handleCheckbox: () => console.log("click")
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.storyName = "Checked";
Checked.args = {
  checked: true
};

export const UnChecked = Template.bind({});
UnChecked.storyName = "UnChecked";
UnChecked.args = {
  checked: false
};

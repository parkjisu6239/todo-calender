import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: "secondary",
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};

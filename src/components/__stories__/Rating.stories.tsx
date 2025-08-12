import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Rating from "../Rating";

export default {
  title: "Rating",
  component: Rating,
  argTypes: {},
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  rounded: true,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  rounded: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  rounded: true,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
  text: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: 'medium',
  text: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
  text: 'Large',
};
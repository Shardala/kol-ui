import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  children: 'Secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  children: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
  children: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: 'medium',
  children: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
  children: 'Large',
};
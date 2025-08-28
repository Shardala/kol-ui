import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  error: false,
  disabled: false,
  label: 'Name (Primary)',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  error: false,
  disabled: false,
  label: 'Name (Secondary)',
};

export const Success = Template.bind({});
Success.args = {
  primary: true,
  error: false,
  success: true,
  disabled: false,
  label: 'This field is filled successfully',
};

export const Error = Template.bind({});
Error.args = {
  primary: true,
  error: true,
  disabled: false,
  message: 'Error: Field can\'t be empty!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
  label: 'This field is disabled',
};
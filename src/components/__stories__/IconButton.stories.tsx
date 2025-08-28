import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseIcon } from '../Icons/Icons';
import Button from '../Button';

export default {
  title: 'IconButton',
  component: Button,
  argTypes: {
    primary: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Button'
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const icBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '0.5rem'
};

export const Primary = Template.bind({});
Primary.args = {
 primary: true,
  disabled: false,
  text: 'Primary',
  children: (
    <span className={'icon'} style={icBtnStyle}>
      <CloseIcon />
      {'Primary'}
    </span>
  )
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  children: (
    <span className='icon' style={icBtnStyle}>
      <CloseIcon />
      {'Secondary'}
    </span>
  )
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  children: (
    <span className='icon' style={icBtnStyle}>
      <CloseIcon />
      {'Disabled'}
    </span>
  )
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: 'small',
  children: (
    <span className='icon' style={icBtnStyle}>
      <CloseIcon />
      {'Small'}
    </span>
  )
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: 'medium',
  children: (
    <span className='icon' style={icBtnStyle}>
      <CloseIcon />
      {'Medium'}
    </span>
  )
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
  children: (
    <span className='icon' style={icBtnStyle}>
      <CloseIcon />
      {'Large'}
    </span>
  )
};
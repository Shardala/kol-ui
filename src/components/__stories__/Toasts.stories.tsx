import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ToastContainer from "../ToastContainer";
import Button from "../Button";
import styled from 'styled-components';

export default {
  title: "Toasts",
  component: ToastContainer,
  argTypes: {},
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = (args) => {
  const [toasts, setToasts] = useState([]);
  const [autoClose, setAutoClose] = useState(true);
  const [autoCloseDuration, setAutoCloseDuration] = useState(5);
  const [position, setPosition] = useState("top-right");

  const positions = {
    "top-right": "Top-right",
    "top-left": "Top-left",
    "bottom-right": "Bottom-right",
    "bottom-left": "Bottom-left",
  };

  const showToast = (message, type) => {
    const toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts): any => [...prevToasts, toast]);

    if (autoClose) {
      setTimeout(() => {
        removeToast(toast.id);
      }, autoCloseDuration * 1000);
    }
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast: any) => toast.id !== id));
  };

  const StyledSuccess = styled(Button)`
    background: green;
    :hover {
      background: darkgreen;
    }
  `;

  const StyledWarning = styled(Button)`
    color: #000;
    background: yellow;
    :hover {
      background: orange;
    }
  `;

  const StyledError = styled(Button)`
    background: red;
    :hover {
      background: darkred;
    }
  `;

  const StyledInfo = styled(Button)`
    background: lightblue;
    :hover {
      background: blue;
    }
  `;

  const StyledCustom = styled(Button)`
    background: violet;
    :hover {
      background: darkviolet;
    }
  `;

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        <li><StyledSuccess size='small' text='Success' onClick={() => showToast('Test success toast', 'Success')}></StyledSuccess></li>
        <li><StyledWarning size='small' text='Warning' onClick={() => showToast('Test warning toast', 'Warning')}></StyledWarning></li>
        <li><StyledError size='small' text='Error' onClick={() => showToast('Test error toast', 'Error')}></StyledError></li>
        <li><StyledInfo size='small' text='Info' onClick={() => showToast('Test info toast', 'Info')}></StyledInfo></li>
        <li><StyledCustom size='small' text='Custom' onClick={() => showToast('Test custom toast', 'Custom')}></StyledCustom></li>
      </ul>

      <ToastContainer data={toasts} position={position} removeToast={removeToast} />
    </>
  );
}

export const Default = Template.bind({});
Default.args = {
  //
};

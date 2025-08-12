import React from "react";
import { ToastProps } from "./Toast.types";
import styled from "styled-components";
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon
} from '../Icons/Icons';

import './Toast.css';

const StyledToast = styled.div<{ typeColor: string }>`
  width: 400px;
  height: 50px;
  padding: 0.5rem 1rem;

  background: ${(props) => props.typeColor || '#fff'};
  border-radius: 0.5rem;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledToastMessage = styled.div<{ typeColor: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  color: ${(props) => props.typeColor || '#fff'};
`;

const StyledProgress = styled.div<{ typeColor: string }>`
  width: 100%;
  padding: 2px 0;
  background: ${(props) => props.typeColor || '#fff'};
`;

const StyledCloseButton = styled.button`
  background: gray;
  color: #ffffff;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  transition:
    border-color 0.2s,
    background 0.2s;

  &:hover {
    border: 1px solid white;
    background: rgb(199, 150, 150);
  }
`;

const Toast: React.FC<ToastProps> = ({
  id,
  icon = <InfoIcon />,
  type = 'Info',
  message,
  onClose,
  ...props
}) => {

  function getBgColor() {
    if (type === 'Success') return "green";
    else if (type === 'Warning') return "yellow";
    else if (type === 'Error') return "red";
    else if (type === 'Info') return "cyan";
    else if (type === 'Custom') return "violet";

    return '#fff';
  }

  function getFgColor() {
    if (type === 'Success') return '#abe9cb';
    else if (type === 'Warning') return "orange";
    else if (type === 'Error') return "white";
    else if (type === 'Info') return "blue";
    else if (type === 'Custom') return "red";

    return '#fff';
  }

  const typeBgColor = getBgColor();
  const typeFgColor = getFgColor();

  const iconMap = {
    Success: <SuccessIcon />,
    Warning: <WarningIcon />,
    Error: <ErrorIcon />,
    Info: <InfoIcon />,
    Custom: icon
  };

  const toastIcon = iconMap[type] || null;

  return (
    <StyledToast
      typeColor={typeBgColor}
      role="alert"
    >
      <StyledContent>
        <StyledToastMessage
          className="toast-message"
          typeColor={typeFgColor}
        >
          {toastIcon && (
            <div className="icon icon--lg icon--thumb">{toastIcon}</div>
          )}
          <p>{message}</p>
        </StyledToastMessage>
        <StyledCloseButton onClick={onClose} {...props}>
          <span className="icon">
            <CloseIcon />
          </span>
        </StyledCloseButton>
      </StyledContent>
      <StyledProgress typeColor={typeFgColor} className='styled-prog' />
    </StyledToast>
  );
};

export default Toast;
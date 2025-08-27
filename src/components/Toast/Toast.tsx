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
import Button from '../Button';

const StyledToast = styled.div`
  width: 400px;
  height: 50px;
  padding: 0.5rem 1rem;

  background: #272727;
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

const StyledToastMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  color: #fff;
`;

const StyledProgress = styled.div<{ typeColor: string }>`
  width: 100%;
  padding: 2px 0;
  background: ${(props) => props.typeColor || '#fff'};
`;

const StyledCloseButton = styled(Button)`
  padding: 0.5rem 1rem;
  >.icon {
    color: #ffffff;
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

  function getFgColor() {
    if (type === 'Success') return '#518551';
    else if (type === 'Warning') return "orange";
    else if (type === 'Error') return "#bf5151";
    else if (type === 'Info') return "#508da1";
    else if (type === 'Custom') return "#955b95";

    return '#fff';
  }

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
    <StyledToast role="alert">
      <StyledContent>
        <StyledToastMessage className="toast-message">
          {toastIcon && (
            <div className="icon icon--lg icon--thumb" style={{ color: typeFgColor }}>{toastIcon}</div>
          )}
          <p>{message}</p>
        </StyledToastMessage>
        <StyledCloseButton onClick={onClose} primary={true}>
          <span className='icon'>
            <CloseIcon />
          </span>
        </StyledCloseButton>
      </StyledContent>
      <StyledProgress typeColor={typeFgColor} className='styled-prog' />
    </StyledToast>
  );
};

export default Toast;
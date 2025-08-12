import React, { useEffect, useRef } from 'react';
import Toast from '../Toast';
import { ToastContainerProps } from './ToastContainer.types';
import styled from 'styled-components';

const StyledToastContainer = styled.div<{ position?: string }>`
  position: fixed;
  top: ${(props) => props.position === 'top-right' ? '20px' : 'auto'};
  right: ${(props) => props.position === 'top-right' ? '20px' : 'auto'};
  bottom: ${(props) => props.position === 'bottom-right' ? '20px' : 'auto'};
  padding: 1rem;
`;

const ToastContainer: React.FC<ToastContainerProps> = ({
  data,
  position = 'top-right',
  removeToast,
  ...props
}) => {
  const listRef = useRef(null);

  const handleScrolling = (el: any) => {
    const isTopPosition = ["top-left", "top-right"].includes(position);
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else {
      el?.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleScrolling(listRef.current);
  }, [position, data]);

  const sortedData = position.includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <StyledToastContainer
        position={position}
        aria-live="assertive"
        ref={listRef}
      >
        <div className='toast-container' style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {sortedData.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </StyledToastContainer>
    )
  );
};

export default ToastContainer;
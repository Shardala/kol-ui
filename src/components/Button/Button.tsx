import React, { ReactNode } from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid #393939;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? "inherit" : "pointer")};
  font-weight: 700;
  border-radius: 6px;
  display: inline-block;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#aaa" : props.primary ? "#272727" : "#272727")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: ${(props) =>
    props.size === "small" ? "7px 25px 8px"
      : props.size === "medium" ? "9px 30px 11px"
      : "14px 30px 16px"};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#aaa" : props.primary ? "#38434f" : "#3e3647")};
  }
`;

const Button = (props: any) => {
  const { primary, disabled, size, onClick, ...rest } = props;

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
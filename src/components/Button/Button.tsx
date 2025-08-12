import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#aaa" : props.primary ? "#57bf92" : "#7569d7")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#aaa" : props.primary ? "#6fd3a8" : "#9289e1")};
  },
  &:active {
    border: solid 1px #000;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, primary, disabled, size, onClick, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
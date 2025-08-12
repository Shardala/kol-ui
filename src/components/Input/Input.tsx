import React from "react";
import { InputProps } from "./Input.types";
import styled from "styled-components";

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  background-color: #fff;
  border: solid 2px
    ${(props) =>
      props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : props.success ? "#067d68" : props.primary ? "#57bf92" : "#6154cb"};
  &:focus {
    border: solid 2px #1b116e;
  }
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) => (props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808")};
`;

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  message,
  primary,
  success,
  disabled,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        primary={primary}
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </>
  );
};

export default Input;
import React, { useState } from "react";

import { RatingProps } from "./Rating.types";
import styled from "styled-components";

const StyledRating = styled.div<RatingProps>`
  max-width: fit-content;
  border: 1px solid #000;
  border-radius: 6px;
`;

const StyledIcon = styled.span<RatingProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-size: ${(props) =>
    props.size === "small"
      ? "1rem"
      : props.size === "medium"
      ? "1.2rem"
      : "1.5rem"};
`;

const StyledButton = styled.button<RatingProps>`
  border: none;
  cursor: pointer;
  color: ${(props) => (props.starActive ? "#ffd600" : "#999")};
  background: ${(props) => (props.disabled ? "#ccc" : props.primary ? "#57bf92" : "#6154cb")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: ${(props) =>
    props.size === "small"
      ? "0.4rem"
      : props.size === "medium"
      ? "0.8rem"
      : "1rem"};
  &:hover {
    color: ${(props) => (props.disabled ? "#999" : props.starActive ? "#ffd600" : "#888")};
    background: ${(props) => (props.disabled ? "#ccc" : props.primary ? "#6cc9a1" : "#6d61cb")};
  }
`;

const Rating: React.FC<RatingProps> = ({
  primary,
  disabled,
  rounded,
  size,
  ...props
}) => {

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);

  return (
    <StyledRating>
      {stars.map((star, index) => {
        const starActive = star <= rating;
        const isFirst = index == 0;
        const isLast = index == stars.length - 1;

        return (
          <StyledButton
            primary={primary}
            size={size}
            disabled={disabled}
            key={star}
            starActive={starActive}
            onClick={() => setRating(star)}
            style={{
              borderTopLeftRadius: (rounded && isFirst ? "6px" : "0px"),
              borderBottomLeftRadius: (rounded && isFirst ? "6px" : "0px"),
              borderTopRightRadius: (rounded && isLast ? "6px" : "0px"),
              borderBottomRightRadius: (rounded && isLast ? "6px" : "0px"),
            }}
            {...props}
          >
            <StyledIcon size={size}>
              ★
            </StyledIcon>
          </StyledButton>
        );
      })}
    </StyledRating>
  );
};

export default Rating;
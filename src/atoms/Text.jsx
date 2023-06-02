import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  color: ${(props) => props.color};
`;

export const Text = ({ children, className, color }) => {
  return (
    <StyledText color={color} className={className}>
      {children}
    </StyledText>
  );
};

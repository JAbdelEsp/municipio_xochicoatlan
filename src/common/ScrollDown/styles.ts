import styled, { keyframes } from "styled-components";

export const ScrollDot = keyframes`
  0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(20px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

export const ScrollIndicator = styled("div")`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid var(--gray);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

export const Mouse = styled("div")`
  width: 4px;
  height: 8px; /* Represents the scroll "dot" */
  background-color: #000;
  border-radius: 2px;
  animation: ${ScrollDot} 1.5s infinite;
`;

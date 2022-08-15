import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
 
    0% {
      transform: rotate(0);
    }
   
    100% {
        transform: rotate(360deg);
      }

`;

export const Spinner = styled.div`
  padding: 2.2rem;
  width: 1rem;
  border-radius: 50%;
  border: 3px solid #444;
  border-bottom: 4px solid transparent;
  animation: ${spinnerAnimation} 0.6s linear infinite;
`;

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 60%;
`;

import React from "react";
import { Spinner, SpinnerContainer } from "./LoadingSpinner.styles";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

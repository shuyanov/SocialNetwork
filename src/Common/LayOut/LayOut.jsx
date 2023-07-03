import React from "react";
import FlexContainer from "../FlexContainer/FlexContainer";

const Header = ({ children }) => {
  return (
    <FlexContainer
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={100}
    >
      {children}
    </FlexContainer>
  );
};

const Body = ({ children }) => {
  return (
    <FlexContainer
      style={{ minHeight: 1000, paddingTop: 100 }}
      justifyContent="center"
    >
      {children}
    </FlexContainer>
  );
};

export const LayOut = ({ children }) => {
  return <FlexContainer flexDirection={"column"}>{children}</FlexContainer>;
};

LayOut.Header = Header;
LayOut.Body = Body;

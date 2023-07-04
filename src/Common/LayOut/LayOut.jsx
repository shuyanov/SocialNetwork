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

const MassagesBar = ({ children }) => {
  return (
    <FlexContainer
      style={{ marginRight: 35, paddingTop: 20 }}
      justifyContent="end"
    >
      {children}
    </FlexContainer>
  );
};

const NavBar = ({ children }) => {
  return (
    <FlexContainer
      style={{ marginLeft: 35, paddingTop: 20 }}
      justifyContent="start"
    >
      {children}
    </FlexContainer>
  );
};

const Body = ({ children }) => {
  return (
    <FlexContainer
      style={{ minHeight: 10, paddingTop: 20 }}
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
LayOut.NavBar = NavBar;
LayOut.MassagesBar = MassagesBar;

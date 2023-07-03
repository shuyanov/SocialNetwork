import React from "react";
import FlexContainer from "../../../Common/FlexContainer/FlexContainer";
import { NavBar } from "../../Cells/NavBar/NavBar";

export const HomePage = () => {
  return (
    <FlexContainer justifyContent={"start"}>
      <div style={{marginLeft: 35}}>
        <NavBar />
      </div>
    </FlexContainer>
  );
};

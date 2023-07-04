import React, { useEffect } from "react";
import FlexContainer from "../../../Common/FlexContainer/FlexContainer";
import { NavBar } from "../../Cells/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dialogs from "../../Dialog/Dialog";
import Profile from "../../Profile/Profile";

export const HomePage = (props) => {
  return (
    <FlexContainer flexDirection={"row"}>
      <NavBar />
      <div style={{ marginLeft: 35 }}>
        <FlexContainer>
          <Routes>
            <Routes>
              <Route
                path="/dialogs"
                element={<Dialogs state={props.props.DialogElements} />}
              />
              <Route
                path="/profile"
                element={<Profile state={props.props.PostsElements} />}
              />
            </Routes>
          </Routes>
        </FlexContainer>
      </div>
      <NavBar />
    </FlexContainer>
  );
};

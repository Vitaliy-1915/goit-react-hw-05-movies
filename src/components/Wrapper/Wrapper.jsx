import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import ErrorSearch from "../views/ErrorSearch";
import { WrapperContainer } from "./Wrapper.styles";

function Wrapper() {
  return (
    <WrapperContainer>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies"></Route>

        <Route>
          <ErrorSearch />
        </Route>
      </Switch>
    </WrapperContainer>
  );
}

export default Wrapper;

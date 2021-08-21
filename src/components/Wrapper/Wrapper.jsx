import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../Views/HomePage/HomePage";
import ErrorSearch from "../Views/ErrorSearch/ErrorSearch";
import MoviesPage from "../Views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";
import { WrapperContainer } from "./Wrapper.styles";

function Wrapper() {
  return (
    <WrapperContainer>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        {/* <Route path="/movies" >
                    <MoviesPage />
                </Route> */}

        {/* <Route>
                    <ErrorSearch />
                </Route> */}
      </Switch>
    </WrapperContainer>
  );
}

export default Wrapper;

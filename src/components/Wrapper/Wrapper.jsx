// import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../Views/HomePage/HomePage";
import ErrorSearch from "../Views/ErrorSearch/ErrorSearch";
import MoviesPage from "../Views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../Views/MovieDetailsPage/MovieDetailsPage";
import { WrapperContainer } from "./Wrapper.styles";

function Wrapper() {
  return (
    <WrapperContainer>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <ErrorSearch />
        </Route>
      </Switch>
    </WrapperContainer>
  );
}

export default Wrapper;

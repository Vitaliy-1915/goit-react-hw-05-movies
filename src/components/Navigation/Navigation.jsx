import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavLink exact to="/" className="link" activeClassName="activeLink">
      Home
    </NavLink>
    <NavLink to="/movies" className="link" activeClassName="activeLink">
      Movies
    </NavLink>
  </NavigationContainer>
);

export default Navigation;

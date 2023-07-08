// import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";

import { LinkNav, Nav } from "./Navigation.styled";

const Navigation = ({ onClick }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkNav to="/" onClick={onClick}>
        Home
      </LinkNav>
      {/* <NavLink className={css.link} to="/weather">
        Weather
      </NavLink>
      <NavLink className={css.link} to="/movies">
        Movies
      </NavLink> */}
      {isLoggedIn && (
        <>
          <LinkNav to="/contacts" onClick={onClick}>
            Contacts
          </LinkNav>
          <LinkNav to="/tasks" onClick={onClick}>
            Tasks
          </LinkNav>
          {/* <NavLink className={css.link} to="/weather">
            Weather
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink> */}
        </>
      )}
    </Nav>
  );
};

export default Navigation;

// import { NavLink } from "react-router-dom";

import { Nav, LinkNav } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Nav>
      <LinkNav to="/login">Login</LinkNav>
      <LinkNav to="/register" className="secondary">
        Registration
      </LinkNav>
    </Nav>
  );
};
export default AuthNav;

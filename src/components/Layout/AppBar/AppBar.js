// import Navigation from "components/Layout/Navigation";
// import UserMenu from "components/Layout/UserMenu";
// import AuthNav from "components/Layout/AuthNav";
import { useAuth } from "hooks";

// import { Navigation } from "components/Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { Wrapper } from "./AppBar.styled";

const AppBar = ({ onClick }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      {isLoggedIn ? <UserMenu onClick={onClick} /> : <AuthNav />}
    </Wrapper>
  );
};
export default AppBar;

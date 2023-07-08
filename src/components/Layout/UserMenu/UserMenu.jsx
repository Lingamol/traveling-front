import { NavLinkAccount, AccountIcon, Sp } from "./UserMenu.styled";

const UserMenu = ({ onClick }) => {
  return (
    <>
      <NavLinkAccount to="/user" onClick={onClick}>
        <AccountIcon /> Account
      </NavLinkAccount>
    </>
  );
};

export default UserMenu;

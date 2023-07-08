// import { GiHamburgerMenu } from "react-icons/gi";
// import { GrFormClose } from "react-icons/gr";
import { MenuButton, HamburgerIcon } from './BurgerMenu.styled';
const BurgerMenu = ({ ...props }) => {
  return (
    <MenuButton {...props} className="menuButton">
      <HamburgerIcon />
    </MenuButton>
  );
};
export default BurgerMenu;

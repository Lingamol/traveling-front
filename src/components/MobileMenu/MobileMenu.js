import ButtonClose from 'components/ButtonClose/ButtonClose';
import { MenuHeader, MenuContainer, Container } from './MobileMenu.styled';
import Logo from 'components/Logo/Logo';
import AppBar from 'components/Layout/AppBar/AppBar';
// import useMatchMedia from "hooks/use-match-media";
import Navigation from 'components/Navigation/Navigation';
const MobileMenu = ({ isOpen, onClick, isMobile = false }) => {
  // const { isMobile, isTablet, isDesktop } = useMatchMedia();
  // console.log("isMob:", isDesktop);
  return (
    <MenuContainer isOpen={isOpen}>
      <Container>
        <MenuHeader>
          <Logo />
          {/* <h1>MobileMenu</h1> */}
          <ButtonClose onClick={onClick}></ButtonClose>
        </MenuHeader>
        {isMobile && <AppBar onClick={onClick} />}
        <Navigation onClick={onClick} />
      </Container>
    </MenuContainer>
  );
};
export default MobileMenu;

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

import useMatchMedia from 'hooks/use-match-media';
import { useState } from 'react';
import Navigation from 'components/Navigation';
import { Container, FlexContainer, Header } from './SharedLayout.styled';
import Logo from 'components/Logo/Logo';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import MobileMenu from 'components/MobileMenu/MobileMenu';
const SharedLayout = () => {
  // return (
  //   <Container>
  //     <Header>
  //       <Logo>PhoneBook</Logo>
  //       {/* <Navigation>
  //         <NavItem to="/">Home</NavItem>
  //         <NavItem to="/contacts">Contacts</NavItem>
  //         <NavItem to="/tasks">Tasks</NavItem>
  //         <NavItem to="/weather">Weather</NavItem>
  //         <NavItem to="/movies">Movies</NavItem>
  //       </Navigation>
  //       <AuthNav>
  //         <NavItem to="/register">Register</NavItem>
  //         <NavItem to="/login">Login</NavItem>
  //       </AuthNav> */}
  //       <AppBar />
  //     </Header>
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Outlet />
  //     </Suspense>
  //   </Container>
  // );
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [isMobMenu, setIsMobMenu] = useState(false);
  const toggleMobMenu = () => {
    // alert(`isMobMenuOpen:${isMobMenu}`);
    setIsMobMenu(!isMobMenu);
  };
  return (
    <Container>
      <Header>
        <FlexContainer>
          <Logo />
          {isDesktop && <Navigation />}
        </FlexContainer>
        <FlexContainer>
          {(isTablet || isDesktop) && <AppBar />}
          {(isMobile || isTablet) && <BurgerMenu onClick={toggleMobMenu} />}
        </FlexContainer>
      </Header>
      <MobileMenu
        isOpen={isMobMenu}
        onClick={toggleMobMenu}
        isMobile={isMobile}
      />

      <Suspense fallback={<div>Loading!!</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;

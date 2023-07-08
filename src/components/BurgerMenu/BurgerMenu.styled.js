import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { colors, transFunc } from "styles/stylesLayout";

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  transition: color ${transFunc.td250CB};
  :hover.hamburgerIcon,
  :focus.hamburgerIcon {
    color: ${colors.accentHover};
  }
`;
export const HamburgerIcon = styled(GiHamburgerMenu)`
  width: 40px;
  height: 40px;
  color: ${colors.accent};
  transition: color ${transFunc.td250CB};
  .menuButton:hover &,
  .menuButton:focus & {
    color: ${colors.accentHover};
  }

  /* size: "30"; */
`;

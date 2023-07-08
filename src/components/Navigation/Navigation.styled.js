import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, media } from "styles/stylesLayout";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.desktop} {
    margin-left: 80px;
  }
  ${media.tablet} {
    flex-direction: column;
    margin-top: 88px;
  }
  ${media.mobile} {
    flex-direction: column;
    margin-top: 60px;
  }
`;

export const LinkNav = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
  /* display: flex;
  align-items: center; */
  letter-spacing: 0.04em;
  color: ${colors.black};
  &.active {
    color: ${colors.accent};
    text-decoration: underline;
  }

  ${media.desktop} {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  ${media.mobile} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  ${media.tablet} {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors, media, transFunc } from "styles/stylesLayout";

export const Nav = styled.div`
  display: flex;
  ${media.tablet} {
    margin-right: 20px;
  }
`;

export const LinkNav = styled(NavLink)`
  display: inline-flex;
  text-align: center;
  padding: 10px 28px;
  border-radius: 40px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${colors.accent};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${colors.white};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  transition: background-color ${transFunc.td250CB} border-color
      ${transFunc.td250CB},
    color ${transFunc.td250CB};
  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }
  &.active {
    /* box-shadow: 7px -7px 21px rgba(123, 64, 22, 0.6); */
  }
  &.secondary {
    border: 2px solid ${colors.accent};
    color: ${colors.black};
    background: ${colors.background};
    &:hover,
    &:focus {
      border-color: ${colors.accentHover};
      color: ${colors.accentHover};
    }
  }
  &:not(:last-child) {
    ${media.desktop} {
      margin-right: 20px;
    }
    ${media.tablet} {
      margin-right: 12px;
    }
  }
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { media, colors, transFunc } from "styles/stylesLayout";
import { BsPersonCircle } from "react-icons/bs";

export const NavLinkAccount = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  /* justify-content: center; */
  color: #fff;
  padding: 10px 28px;
  text-decoration: none;
  border-radius: 40px;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  background: ${colors.accent};
  transition: ${transFunc.td250CB};
  &.active {
    background-color: ${colors.accentHover};
  }
  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }

  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  ${media.tablet} {
    margin-right: 20px;
  }
  /* 
  ${media.mobile} {
    padding: 8px 28px;
  } */
`;
export const AccountIcon = styled(BsPersonCircle)`
  color: ${colors.white};
  height: 28px;
  width: 28px;
  margin-right: 12px;
`;

export const Sp = styled.span`
  margin-left: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

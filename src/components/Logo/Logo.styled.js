import styled from "@emotion/styled";
import { colors, media, transFunc } from "styles/stylesLayout";
export const LogoLink = styled.a`
  display: block;
  color: ${colors.accent};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  transition: color ${transFunc.td250CB};
  &:hover {
    color: ${colors.accentHover};
  }
  ${media.desktop} {
    font-size: 26px;
    line-height: 1.19;
  }
`;
export const Styled = styled.span`
  color: ${colors.accentBlue};
`;

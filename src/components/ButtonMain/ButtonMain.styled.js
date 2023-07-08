import styled from '@emotion/styled';
import { media, colors, transFunc } from 'styles/stylesLayout';
// export const MainButton = styled.button`
//   background: ${props => (props.$primary ? '#BF4F74' : 'white')};
//   color: ${props => (props.$primary ? 'white' : '#BF4F74')};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
// `;
export const ButtonCustom = styled.button`
  /* background: ${props => (props.$primary ? '#BF4F74' : 'white')};
  color: ${props => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px; */
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
  /* background-color: ${props =>
    props.$primary ? colors.accent : colors.background};

  color: ${props => (props.$primary ? colors.white : colors.black)}; */
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  transition: background-color ${transFunc.td250CB} border-color
      ${transFunc.td250CB},
    color ${transFunc.td250CB};
  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
    color: ${colors.black};
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

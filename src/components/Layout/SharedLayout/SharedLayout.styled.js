import styled from "styled-components";
import { media } from "styles/stylesLayout";

export const Container = styled.div`
  /* position: relative; */
  outline: 2px solid red;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.tablet} {
    padding: 0 32px;
  }

  ${media.mobile} {
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile} {
    padding-top: 16px;
  }
  ${media.tabletAndDesktop} {
    padding-top: 24px;
  }

  /* ${media.desktop} {
    padding-top: 22px;
  } */
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.mobileAndTablet} {
    align-items: center;
  }
`;

import { LogoLink, Styled } from './Logo.styled';
import { useTheme } from '@emotion/react';
const Logo = () => {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <LogoLink href="/">
      Happy<Styled>Travel</Styled>
    </LogoLink>
  );
};
export default Logo;

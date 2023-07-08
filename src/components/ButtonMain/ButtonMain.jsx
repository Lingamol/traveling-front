import { ButtonCustom } from './ButtonMain.styled';

const ButtonMain = ({ children, ...props }) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>;
};
export default ButtonMain;
